import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmMultiListWmsInventoryOrderStatus } from '@sdk-list/wms-inventory-order-status/multi-list.component';

@NgModule({
  declarations: [
    EdmMultiListWmsInventoryOrderStatus,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmMultiListWmsInventoryOrderStatus,
  ],
})
export class EdmMultiListWmsInventoryOrderStatusModule { }
