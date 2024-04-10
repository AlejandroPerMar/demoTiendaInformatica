import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppCatalogComponent } from './catalog.component';

const routes: Routes = [
  {
    path: '**',
    component: AppCatalogComponent
  },
  {
    path: '',
    component: AppCatalogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCatalogRoutingModule { }