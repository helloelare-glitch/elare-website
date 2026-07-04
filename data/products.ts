import { Product } from "@/types/product";
export const products: Product[] = [
  {
    id: 1,
    slug: "premium-black-tee",
    category: "men",
    title: "Premium Black Tee",
    brand: "ElAre",
    description:
      "Premium oversized cotton T-shirt designed for comfort and everyday luxury.",
    price: 999,
    discountPrice: 899,
    images: [
  "/products/blacktee/front.jpg",
  "/products/blacktee/back.jpg",
  "/products/blacktee/side.jpg",
],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    stock: 25,
    featured: true,
    newArrival: true,
  },

  {
    id: 2,
    slug: "elegant-kurthi",
    category: "women",
    title: "Elegant Kurthi",
    brand: "ElAre",
    description:
      "Elegant premium kurthi crafted with soft breathable fabric.",
    price: 1499,
    discountPrice: 1399,
    images: [
      "/kurthi.jpg",
      "/women.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cream"],
    stock: 15,
    featured: true,
    newArrival: false,
  },
  {
    id: 3,
    slug: "matching-couple-set",
    category: "couple",
    title: "Matching Couple Set",
    brand: "ElAre",
    description:
      "Premium coordinated couple outfit for special occasions.",
    price: 2499,
    discountPrice: 2299,
    images: [
      "/couple.jpg",
      "/couple.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige"],
    stock: 10,
    featured: true,
    newArrival: true,
  },
  {
  id: 4,
  slug: "classic-white-tee",
  category: "men",

  title: "Classic White Tee",

  brand: "ElAre",

  description:
    "Classic premium white cotton T-shirt with a relaxed fit.",

  price: 899,

  discountPrice: 799,

  images: [
    "/whitetee.jpg",
    "/whitetees.jpg",
  ],

  sizes: ["S", "M", "L", "XL"],

  colors: ["White"],

  stock: 20,

  featured: false,

  newArrival: true,
},
 {
  id: 5,
  slug: "premium-cream-kurthi",
  category: "women",

  title: "Premium Cream Kurthi",

  brand: "ElAre",

  description:
    "Elegant cream kurthi designed for comfort and timeless style.",

  price: 1699,

  discountPrice: 1599,

images: [
  "/products/Cream Kurthi/women.jpg",
  "/products/Cream Kurthi/back.png",
  "/products/Cream Kurthi/side.png",
],

  sizes: ["S", "M", "L", "XL"],

  colors: ["Cream"],

  stock: 18,

  featured: false,

  newArrival: true,
},
  {
  id: 6,
  slug: "beige-couple-combo",
  category: "couple",

  title: "Beige Couple Combo",

  brand: "ElAre",

  description:
    "Luxury matching couple outfit crafted for special occasions.",

  price: 2899,

  discountPrice: 2699,

  images: [
    "/couple.jpg",
    "/couple.jpg",
  ],

  sizes: ["S", "M", "L", "XL"],

  colors: ["Beige"],

  stock: 8,

  featured: true,

  newArrival: false,
},  
];