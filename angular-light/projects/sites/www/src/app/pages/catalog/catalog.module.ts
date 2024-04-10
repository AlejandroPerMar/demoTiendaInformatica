import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppCatalogRoutingModule } from './catalog-routing.module';
import { AppCatalogComponent } from './catalog.component';
import { FooterComponent } from '../../footer/footer.component';
import { ContactComponent } from '../contact/contact.component';


@NgModule({
  declarations: [
    AppCatalogComponent
  ],
  imports: [
    CommonModule,
    AppCatalogRoutingModule,
    ContactComponent,
    FooterComponent
  ],
  exports: [
  ]
})
export class AppCatalogModule { }