-- ======================================
-- Supabase Database Schema
-- אתר מארזי בטון - E-commerce
-- ======================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ======================================
-- Products Table (טבלת מוצרים)
-- ======================================
create table if not exists products (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  description text not null,
  price numeric(10, 2) not null check (price >= 0),
  image text not null,
  category text not null,
  size text not null check (size in ('small', 'medium', 'large')),
  stock integer not null default 0 check (stock >= 0),
  featured boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Index for faster queries
create index if not exists idx_products_category on products(category);
create index if not exists idx_products_size on products(size);
create index if not exists idx_products_featured on products(featured);

-- ======================================
-- Orders Table (טבלת הזמנות)
-- ======================================
create table if not exists orders (
  id uuid primary key default uuid_generate_v4(),
  customer_name text not null,
  customer_email text not null,
  customer_phone text not null,
  customer_address text not null,
  total_amount numeric(10, 2) not null check (total_amount >= 0),
  status text not null default 'pending' check (status in ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Index for faster queries
create index if not exists idx_orders_status on orders(status);
create index if not exists idx_orders_email on orders(customer_email);
create index if not exists idx_orders_created_at on orders(created_at desc);

-- ======================================
-- Order Items Table (טבלת פריטי הזמנה)
-- ======================================
create table if not exists order_items (
  id uuid primary key default uuid_generate_v4(),
  order_id uuid not null references orders(id) on delete cascade,
  product_id uuid not null references products(id),
  quantity integer not null check (quantity > 0),
  price numeric(10, 2) not null check (price >= 0),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Index for faster queries
create index if not exists idx_order_items_order_id on order_items(order_id);
create index if not exists idx_order_items_product_id on order_items(product_id);

-- ======================================
-- Auto-update updated_at timestamp
-- ======================================
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

-- Triggers for auto-updating updated_at
create trigger update_products_updated_at before update on products
  for each row execute function update_updated_at_column();

create trigger update_orders_updated_at before update on orders
  for each row execute function update_updated_at_column();

-- ======================================
-- Row Level Security (RLS)
-- ======================================

-- Enable RLS
alter table products enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;

-- Public read access to products
create policy "Allow public read access to products"
  on products for select
  using (true);

-- Authenticated users can insert/update products (for admin panel)
create policy "Allow authenticated users to manage products"
  on products for all
  using (auth.role() = 'authenticated');

-- Anyone can create orders
create policy "Allow anyone to create orders"
  on orders for insert
  with check (true);

-- Users can view their own orders (by email)
create policy "Allow users to view their own orders"
  on orders for select
  using (customer_email = auth.jwt() ->> 'email' or auth.role() = 'authenticated');

-- Anyone can create order items (during checkout)
create policy "Allow anyone to create order items"
  on order_items for insert
  with check (true);

-- Users can view order items for their orders
create policy "Allow users to view their order items"
  on order_items for select
  using (
    exists (
      select 1 from orders
      where orders.id = order_items.order_id
      and (orders.customer_email = auth.jwt() ->> 'email' or auth.role() = 'authenticated')
    )
  );

-- ======================================
-- Sample Data (נתוני דוגמה)
-- ======================================
insert into products (name, description, price, image, category, size, stock, featured) values
('מארז לב קטן', 'מארז בטון בצורת לב, מושלם למתנה רומנטית. כולל שתי תאורות LED קטנות.', 120, '/images/heart-small.jpg', 'romantic', 'small', 10, true),
('מארז לב בינוני', 'מארז בטון בצורת לב בגודל בינוני עם 4 תאורות LED. אידיאלי ליום האהבה.', 180, '/images/heart-medium.jpg', 'romantic', 'medium', 8, true),
('מארז חנוכת בית', 'מארז מיוחד לחנוכת בית עם 6 תאורות LED וחריטה אישית. מתנה מושלמת!', 250, '/images/housewarming.jpg', 'housewarming', 'large', 5, true),
('מארז יום הולדת', 'מארז בטון מעוצב במיוחד ליום הולדת עם אפשרות לחריטת שם.', 150, '/images/birthday.jpg', 'birthday', 'medium', 12, false),
('מארז מתנה לזוג', 'מארז כפול מיוחד לזוגות עם שני חללים נפרדים ותאורה רומנטית.', 280, '/images/couple.jpg', 'romantic', 'large', 6, true),
('מארז קטן מינימליסטי', 'מארז בטון קטן ומינימליסטי, מושלם למשרד או לחדר עבודה.', 90, '/images/minimal-small.jpg', 'gift', 'small', 15, false);

-- ======================================
-- Functions for application
-- ======================================

-- Function to get featured products
create or replace function get_featured_products()
returns setof products as $$
  select * from products where featured = true order by created_at desc;
$$ language sql;

-- Function to get products by category
create or replace function get_products_by_category(cat text)
returns setof products as $$
  select * from products where category = cat order by created_at desc;
$$ language sql;

-- Function to decrease stock after purchase
create or replace function decrease_product_stock(product_uuid uuid, qty integer)
returns void as $$
  update products set stock = stock - qty where id = product_uuid and stock >= qty;
$$ language sql;
