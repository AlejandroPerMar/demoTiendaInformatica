import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmMultiListWmsInventoryCorrectionReason } from '@sdk-list/wms-inventory-correction-reason/multi-list.component';

@NgModule({
  declarations: [
    EdmMultiListWmsInventoryCorrectionReason,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmMultiListWmsInventoryCorrectionReason,
  ],
})
export class EdmMultiListWmsInventoryCorrectionReasonModule { }
