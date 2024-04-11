import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppCatalogRoutingModule } from './catalog-routing.module';
import { AppCatalogComponent } from './catalog.component';


@NgModule({
  declarations: [
    AppCatalogComponent
  ],
  imports: [
    CommonModule,
    AppCatalogRoutingModule,
  ],
  exports: [
  ]
})
export class AppCatalogModule { }