import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmListXxGender } from '@sdk-list/xx-gender/list.component';

@NgModule({
  declarations: [
    EdmListXxGender,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmListXxGender,
  ],
})
export class EdmListXxGenderModule { }
