import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmListXxCountryRegion } from '@sdk-list/xx-country-region/list.component';

@NgModule({
  declarations: [
    EdmListXxCountryRegion,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmListXxCountryRegion,
  ],
})
export class EdmListXxCountryRegionModule { }
