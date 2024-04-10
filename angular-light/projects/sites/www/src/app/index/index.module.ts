import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppIndexRoutingModule } from './index-routing.module';
import { AppIndexComponent } from './index.component';

import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { FooterComponent } from '../footer/footer.component';
import { ContactComponent } from '../pages/contact/contact.component';


@NgModule({
  declarations: [
    AppIndexComponent
  ],
  imports: [
    CommonModule,
    AppIndexRoutingModule,
    MdbCarouselModule,
    FooterComponent,
    ContactComponent
  ],
  exports: [
  ]
})
export class AppIndexModule { }
