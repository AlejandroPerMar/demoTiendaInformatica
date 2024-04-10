import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Controller, ControllerProvider } from '@sdk-ts/controller';
import { products } from '../../assets/db/products';
import { Data } from '../../assets/db/data'

interface Product {
  id?: number;
  name?: string;
  description?: string;
  category?: string[];
  tags?: string[];
  price?: string;
  menorPrice?: number;
  img?: string;
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
  public data: any;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.controller = ControllerProvider.instance;
    this.products = products;
    console.log(this.products)
  }

  ngOnInit(): void {
    this.data = this.getData();
    console.log("DATA", this.data)
    this.controller.withPortalBanner = false;
    this.controller.updateNavigationMenuMode('over');
  }

  ngOnDestroy(): void {
    this.controller.unregisterOnResize(this.onResize);
  }

  private onResize: () => void = () => {
    this.changeDetectorRef.markForCheck();
  }

  getData(){
    return Data;
  }

}



