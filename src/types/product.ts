export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  size: 'small' | 'medium' | 'large';
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  customerInfo: CustomerInfo;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: Date;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
}
