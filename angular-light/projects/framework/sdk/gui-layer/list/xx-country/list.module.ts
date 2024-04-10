import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmListXxCountry } from '@sdk-list/xx-country/list.component';

@NgModule({
  declarations: [
    EdmListXxCountry,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmListXxCountry,
  ],
})
export class EdmListXxCountryModule { }
