import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { AppProductDetailRoutingModule } from './product-detail-routing.module';
import { AppProductDetailComponent } from './product-detail.component';


@NgModule({
  declarations: [
    AppProductDetailComponent,
  ],
  imports: [
    CommonModule,
    AppProductDetailRoutingModule,
    MdbCarouselModule
  ],
  exports: [
  ]
})
export class AppProductDetailModule { }
