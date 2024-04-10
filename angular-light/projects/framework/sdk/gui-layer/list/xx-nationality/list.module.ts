import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdmListXxNationality } from '@sdk-list/xx-nationality/list.component';

@NgModule({
  declarations: [
    EdmListXxNationality,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EdmListXxNationality,
  ],
})
export class EdmListXxNationalityModule { }
