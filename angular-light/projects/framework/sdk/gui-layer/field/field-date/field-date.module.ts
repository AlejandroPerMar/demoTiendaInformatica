import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmGuiFieldDateDirective } from '@sdk-field/field-date/field-date.directive';



@NgModule({
  declarations: [
    EdmGuiFieldDateDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmGuiFieldDateDirective,
  ]
})
export class EdmGuiFieldDateModule { }
