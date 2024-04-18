export interface Product {
  name: string;
  brand: string;
  shortDescription: string;
  description: string;
  price: string;
  avatar: string;
  images: { src: string , img:string}[];
  tags: string[];
  uuid: string;
}