import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Controller, ControllerProvider } from '@sdk-ts/controller';
import { products } from '../../assets/db/products';


interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  categorias: string[];
  etiquetas: string[];
  precio: number;
  precioRebajado?: number;
  urlImagen: string;
}


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppIndexComponent implements OnInit {

  public controller: Controller;

  public products: Product[];

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.controller = ControllerProvider.instance;
    this.products = products;
    console.log(this.products)
  }

  ngOnInit(): void {
    this.controller.withPortalBanner = false;
    this.controller.updateNavigationMenuMode('over');
  }

  ngOnDestroy(): void {
    this.controller.unregisterOnResize(this.onResize);
  }

  private onResize: () => void = () => {
    this.changeDetectorRef.markForCheck();
  }

}



