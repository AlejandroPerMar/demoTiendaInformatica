import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmGuiFieldObjectDirective } from '@sdk-field/field-object/field-object.directive';

@NgModule({
  declarations: [
    EdmGuiFieldObjectDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmGuiFieldObjectDirective,
  ]
})
export class EdmGuiFieldObjectModule { }
