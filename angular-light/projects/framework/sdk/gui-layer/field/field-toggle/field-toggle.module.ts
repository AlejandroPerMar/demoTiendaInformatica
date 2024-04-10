import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmGuiFieldToggleDirective } from '@sdk-field/field-toggle/field-toggle.directive';

@NgModule({
  declarations: [
    EdmGuiFieldToggleDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmGuiFieldToggleDirective,
  ]
})
export class EdmGuiFieldToggleModule { }
