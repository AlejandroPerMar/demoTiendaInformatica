export interface Product {
  name: string;
  brand: string;
  shortDescription: string;
  description: string;
  price: string;
  avatar: string;
  images: { src: string }[];
  tags: string[];
  uuid: string;
}