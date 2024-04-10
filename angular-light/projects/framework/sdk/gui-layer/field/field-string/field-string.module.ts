import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmGuiFieldStringDirective } from '@sdk-field/field-string/field-string.directive';



@NgModule({
  declarations: [
    EdmGuiFieldStringDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmGuiFieldStringDirective,
  ]
})
export class EdmGuiFieldStringModule { }
