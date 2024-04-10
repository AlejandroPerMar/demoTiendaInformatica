import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmMultiListXxCountry } from '@sdk-list/xx-country/multi-list.component';

@NgModule({
  declarations: [
    EdmMultiListXxCountry,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmMultiListXxCountry,
  ],
})
export class EdmMultiListXxCountryModule { }
