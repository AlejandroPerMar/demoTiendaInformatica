import { Injectable } from '@angular/core';
import { products } from '../../assets/db/products'; // Importa el array de productos

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAllProducts() {
    return products;
  }

  getProductById(id: string) {
    return products.find(product => product.uuid === id);
  }
}
