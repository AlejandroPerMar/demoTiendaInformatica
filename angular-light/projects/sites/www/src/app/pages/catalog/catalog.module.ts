import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppCatalogRoutingModule } from './catalog-routing.module';
import { AppCatalogComponent } from './catalog.component';
import { FooterComponent } from '../../components/footer/footer.component';


@NgModule({
  declarations: [
    AppCatalogComponent
  ],
  imports: [
    CommonModule,
    AppCatalogRoutingModule,
    FooterComponent
  ],
  exports: [
  ]
})
export class AppCatalogModule { }