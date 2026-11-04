export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

export const products: Product[] = [
  { id: "1", name: "Canvas Backpack", price: 49, description: "Durable everyday backpack.", image: "https://picsum.photos/seed/bag/720/540" },
  { id: "2", name: "Steel Bottle", price: 19, description: "Keeps drinks cold for 24 hours.", image: "https://picsum.photos/seed/bottle/720/540" },
  { id: "3", name: "Desk Lamp", price: 35, description: "Warm, dimmable LED lamp.", image: "https://picsum.photos/seed/lamp/720/540" },
  { id: "4", name: "Notebook Set", price: 12, description: "Three dotted notebooks.", image: "https://picsum.photos/seed/notebook/720/540" },
  { id: "5", name: "Wireless Mouse", price: 25, description: "Quiet clicks, long battery.", image: "https://picsum.photos/seed/mouse/720/540" },
  { id: "6", name: "Headphones", price: 89, description: "Over-ear, noise reducing.", image: "https://picsum.photos/seed/headphones/720/540" },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);