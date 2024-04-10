import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmGuiFieldTextareaDirective } from '@sdk-field/field-textarea/field-textarea.directive';



@NgModule({
  declarations: [
    EdmGuiFieldTextareaDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmGuiFieldTextareaDirective,
  ]
})
export class EdmGuiFieldTextareaModule { }
