import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmGuiFieldDocumentReadDirective } from '@sdk-field/field-document/field-document-read.directive';
import { EdmGuiFieldDocumentDirective } from '@sdk-field/field-document/field-document.directive';



@NgModule({
  declarations: [
    EdmGuiFieldDocumentDirective,
    EdmGuiFieldDocumentReadDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmGuiFieldDocumentDirective,
    EdmGuiFieldDocumentReadDirective,
  ]
})
export class EdmGuiFieldDocumentModule { }
