import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmMultiListXxGender } from '@sdk-list/xx-gender/multi-list.component';

@NgModule({
  declarations: [
    EdmMultiListXxGender,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmMultiListXxGender,
  ],
})
export class EdmMultiListXxGenderModule { }
