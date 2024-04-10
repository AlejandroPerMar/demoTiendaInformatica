import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmListWmsMeasureUnit } from '@sdk-list/wms-measure-unit/list.component';

@NgModule({
  declarations: [
    EdmListWmsMeasureUnit,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmListWmsMeasureUnit,
  ],
})
export class EdmListWmsMeasureUnitModule { }
