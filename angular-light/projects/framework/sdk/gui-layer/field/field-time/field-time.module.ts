import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmGuiFieldTimeDirective } from '@sdk-field/field-time/field-time.directive';

@NgModule({
  declarations: [
    EdmGuiFieldTimeDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmGuiFieldTimeDirective,
  ]
})
export class EdmGuiFieldTimeModule {
}
