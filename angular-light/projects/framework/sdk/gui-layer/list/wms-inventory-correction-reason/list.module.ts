import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmListWmsInventoryCorrectionReason } from '@sdk-list/wms-inventory-correction-reason/list.component';

@NgModule({
  declarations: [
    EdmListWmsInventoryCorrectionReason,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmListWmsInventoryCorrectionReason,
  ],
})
export class EdmListWmsInventoryCorrectionReasonModule { }
