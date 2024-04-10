import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmGuiFieldYoutubeDirective } from '@sdk-field/field-youtube/field-youtube.directive';



@NgModule({
  declarations: [
    EdmGuiFieldYoutubeDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmGuiFieldYoutubeDirective,
  ]
})
export class EdmGuiFieldYoutubeModule { }
