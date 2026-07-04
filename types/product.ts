export interface Product {
  id: number;

  slug: string;

  category: string;

  title: string;

  brand: string;

  description: string;

  price: number;

  discountPrice: number;

  images: string[];

  sizes: string[];

  colors: string[];

  stock: number;

  featured: boolean;

  newArrival: boolean;
}