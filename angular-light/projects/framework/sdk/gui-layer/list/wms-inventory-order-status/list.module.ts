import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmListWmsInventoryOrderStatus } from '@sdk-list/wms-inventory-order-status/list.component';

@NgModule({
  declarations: [
    EdmListWmsInventoryOrderStatus,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmListWmsInventoryOrderStatus,
  ],
})
export class EdmListWmsInventoryOrderStatusModule { }
