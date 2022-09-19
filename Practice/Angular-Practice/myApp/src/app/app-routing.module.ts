import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { ConditionComponent } from './condition/condition.component';
import { PipesComponent } from './condition/pipes/pipes.component';
import { Pipes2Component } from './condition/pipes2/pipes2.component';
import { ParentCommunicationComponent } from './communication/parent-communication/parent-communication.component';
const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'binding',
    component: BindingComponent
  },
  {
    path: 'communication',
    component: ParentCommunicationComponent
  },
  {
    path: ' ',
    pathMatch: "full",
    redirectTo: "home"
  },
  {
   path:'condition',
   component:ConditionComponent,
   children: [
    {
      path: 'pipe',
      component: PipesComponent
    },
    {
      path: 'pipes2',
      component: Pipes2Component
    },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
