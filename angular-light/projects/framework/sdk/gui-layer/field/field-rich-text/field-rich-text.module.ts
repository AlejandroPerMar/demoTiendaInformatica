import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmGuiFieldRichTextDirective } from '@sdk-field/field-rich-text/field-rich-text.directive';


@NgModule({
  declarations: [
    EdmGuiFieldRichTextDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmGuiFieldRichTextDirective,
  ]
})
export class EdmGuiFieldRichTextModule { }
