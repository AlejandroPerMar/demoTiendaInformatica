import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppProductDetailComponent } from './product-detail.component';


const routes: Routes = [
  {
    path: '**',
    component: AppProductDetailComponent
  },
  {
    path: '',
    component: AppProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppProductDetailRoutingModule { }
