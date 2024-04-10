import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmGuiFieldDecimalDirective } from '@sdk-field/field-decimal/field-decimal.directive';



@NgModule({
  declarations: [
    EdmGuiFieldDecimalDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmGuiFieldDecimalDirective,
  ]
})
export class EdmGuiFieldDecimalModule { }
