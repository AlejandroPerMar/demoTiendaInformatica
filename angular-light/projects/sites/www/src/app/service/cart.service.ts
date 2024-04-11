import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { cart } from '../../assets/db/cart'; // Importamos el array cart del archivo cart.ts

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartUrl = '../../assets/db/cart.ts'; // Ruta al archivo cart.ts

  constructor(private http: HttpClient) { }

  // Método para obtener el contenido actual del carrito desde cart.ts
  getCart(): Observable<any[]> {
    return of(cart); // Devolvemos el array cart
  }

  // Método para agregar un producto al carrito y actualizar cart.ts
  addToCart(product: any): Observable<any[]> {
    cart.push(product); // Agregamos el producto al array cart
    console.log('Producto agregado al carrito:', product);
    return of(cart); // Devolvemos el array actualizado
  }
}
