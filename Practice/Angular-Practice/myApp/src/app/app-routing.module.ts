import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { CommunicationComponent } from './communication/communication.component';
import { ConditionComponent } from './condition/condition.component';
import { PipesComponent } from './condition/pipes/pipes.component';
import { Pipes2Component } from './condition/pipes2/pipes2.component';

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
    component: CommunicationComponent
  },
  {
   path:'condition',
   component:ConditionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
