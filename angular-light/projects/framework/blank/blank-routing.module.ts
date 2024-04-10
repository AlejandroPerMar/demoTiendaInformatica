import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppBlankComponent } from './blank.component';

const routes: Routes = [
  {
    path: '**',
    component: AppBlankComponent
  },
  {
    path: '',
    component: AppBlankComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppBlankRoutingModule { }
