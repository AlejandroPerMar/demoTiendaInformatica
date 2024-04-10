import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmGuiFieldActorDirective } from '@sdk-field/field-actor/field-actor.directive';

@NgModule({
  declarations: [
    EdmGuiFieldActorDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmGuiFieldActorDirective,
  ]
})
export class EdmGuiFieldActorModule { }
