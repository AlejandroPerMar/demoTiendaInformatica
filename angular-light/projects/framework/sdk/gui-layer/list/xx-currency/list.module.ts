import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmListXxCurrency } from '@sdk-list/xx-currency/list.component';

@NgModule({
  declarations: [
    EdmListXxCurrency,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmListXxCurrency,
  ],
})
export class EdmListXxCurrencyModule { }
