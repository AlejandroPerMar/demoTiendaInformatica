import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppAboutRoutingModule } from './about-routing.module';
import { AppAboutComponent } from './about.component';


@NgModule({
  declarations: [
    AppAboutComponent
  ],
  imports: [
    CommonModule,
    AppAboutRoutingModule,
  ],
  exports: [
  ]
})
export class AppAboutModule { }
