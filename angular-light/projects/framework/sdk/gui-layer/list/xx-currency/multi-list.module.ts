import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmMultiListXxCurrency } from '@sdk-list/xx-currency/multi-list.component';

@NgModule({
  declarations: [
    EdmMultiListXxCurrency,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmMultiListXxCurrency,
  ],
})
export class EdmMultiListXxCurrencyModule { }
