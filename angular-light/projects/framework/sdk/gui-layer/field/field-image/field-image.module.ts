import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmGuiFieldImageDirective } from '@sdk-field/field-image/field-image.directive';


@NgModule({
  declarations: [
    EdmGuiFieldImageDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EdmGuiFieldImageDirective,
  ]
})
export class EdmGuiFieldImageModule { }
