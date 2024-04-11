import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Controller, ControllerProvider } from '@sdk-ts/controller';
import { Product } from '../../interfaces/product.interface';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../service/products.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppProductDetailComponent {

  public controller: Controller;
  private routeSubscription: Subscription;

  product: Product;
  selectedImage!: string;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService,
  ) {
    this.controller = ControllerProvider.instance;
  }

  ngOnInit(): void {
    this.controller.withPortalBanner = false;
    this.controller.updateNavigationMenuMode('over');

    this.routeSubscription = this.route.params.subscribe(params => {
      const uuid = params['uuid'];
      this.product = this.productService.getProductById(uuid);
      this.changeDetectorRef.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.controller.unregisterOnResize(this.onResize);

    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  private onResize: () => void = () => {
    this.changeDetectorRef.markForCheck();
  }


  selectImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }

  addToCart(): void {
    // Agregar el producto actual al carrito de compras
    this.cartService.addToCart(this.product).subscribe(
      (cart: any[]) => {
        console.log('Producto agregado al carrito:', cart);
        // Aquí puedes realizar cualquier acción adicional después de agregar el producto al carrito
      },
      (error) => {
        console.error('Error al agregar el producto al carrito:', error);
        // Aquí puedes manejar el error adecuadamente según tus necesidades
      }
    );
  }

}