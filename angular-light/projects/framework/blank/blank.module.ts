import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppBlankRoutingModule } from './blank-routing.module';
import { AppBlankComponent } from './blank.component';


@NgModule({
  declarations: [
    AppBlankComponent
  ],
  imports: [
    CommonModule,
    AppBlankRoutingModule,
  ],
  exports: [
  ]
})
export class AppBlankModule { }
