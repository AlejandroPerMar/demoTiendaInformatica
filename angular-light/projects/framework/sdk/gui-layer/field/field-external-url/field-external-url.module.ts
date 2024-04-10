import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmGuiFieldExternalUrlDirective } from '@sdk-field/field-external-url/field-external-url.directive';



@NgModule({
  declarations: [
    EdmGuiFieldExternalUrlDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmGuiFieldExternalUrlDirective,
  ]
})
export class EdmGuiFieldExternalUrlModule { }
