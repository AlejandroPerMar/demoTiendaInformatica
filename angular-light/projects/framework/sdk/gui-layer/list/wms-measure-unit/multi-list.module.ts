import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmMultiListWmsMeasureUnit } from '@sdk-list/wms-measure-unit/multi-list.component';

@NgModule({
  declarations: [
    EdmMultiListWmsMeasureUnit,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmMultiListWmsMeasureUnit,
  ],
})
export class EdmMultiListWmsMeasureUnitModule { }
