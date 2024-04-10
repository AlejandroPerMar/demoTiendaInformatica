import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmListXxLanguage } from '@sdk-list/xx-language/list.component';

@NgModule({
  declarations: [
    EdmListXxLanguage,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmListXxLanguage,
  ],
})
export class EdmListXxLanguageModule { }
