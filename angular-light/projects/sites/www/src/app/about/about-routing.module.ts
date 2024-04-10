import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppAboutComponent } from './about.component';

const routes: Routes = [
  {
    path: '**',
    component: AppAboutComponent
  },
  {
    path: '',
    component: AppAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAboutRoutingModule { }
