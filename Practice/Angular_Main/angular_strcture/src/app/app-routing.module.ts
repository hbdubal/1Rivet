import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { NgForm } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:'condition'
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./customres/customres.module').then(m => m.CustomresModule)
  },
  {
    path: 'form',
    component: ReactiveFormComponent,
  },
  {
    path: 'reactiveform',
    component: ReactiveformsComponent,
  },
  {
    path: 'communication',
    component: ParentComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
