import { supabase } from './supabase';
import type { Product as DbProduct } from './supabase';
import type { Product } from '@/types/product';

// Convert database product to app product type
function dbProductToProduct(dbProduct: DbProduct): Product {
  return {
    id: dbProduct.id,
    name: dbProduct.name,
    description: dbProduct.description,
    price: Number(dbProduct.price),
    image: dbProduct.image,
    category: dbProduct.category,
    size: dbProduct.size,
  };
}

/**
 * Fetch all products from Supabase
 */
export async function getProducts(): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products:', error);
      return [];
    }

    return (data as DbProduct[]).map(dbProductToProduct);
  } catch (error) {
    console.error('Error in getProducts:', error);
    return [];
  }
}

/**
 * Fetch featured products from Supabase
 */
export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false })
      .limit(4);

    if (error) {
      console.error('Error fetching featured products:', error);
      return [];
    }

    return (data as DbProduct[]).map(dbProductToProduct);
  } catch (error) {
    console.error('Error in getFeaturedProducts:', error);
    return [];
  }
}

/**
 * Fetch a single product by ID
 */
export async function getProductById(id: string): Promise<Product | null> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching product:', error);
      return null;
    }

    return dbProductToProduct(data as DbProduct);
  } catch (error) {
    console.error('Error in getProductById:', error);
    return null;
  }
}

/**
 * Fetch products by category
 */
export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products by category:', error);
      return [];
    }

    return (data as DbProduct[]).map(dbProductToProduct);
  } catch (error) {
    console.error('Error in getProductsByCategory:', error);
    return [];
  }
}

/**
 * Fetch products by size
 */
export async function getProductsBySize(size: string): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('size', size)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products by size:', error);
      return [];
    }

    return (data as DbProduct[]).map(dbProductToProduct);
  } catch (error) {
    console.error('Error in getProductsBySize:', error);
    return [];
  }
}

/**
 * Search products by name or description
 */
export async function searchProducts(query: string): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error searching products:', error);
      return [];
    }

    return (data as DbProduct[]).map(dbProductToProduct);
  } catch (error) {
    console.error('Error in searchProducts:', error);
    return [];
  }
}
