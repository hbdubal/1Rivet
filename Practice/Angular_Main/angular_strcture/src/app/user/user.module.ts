import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { BindingComponent } from './binding/binding.component';
import { ConditionComponent } from './condition/condition.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    UserComponent,
    BindingComponent,
    ConditionComponent,
    PipesComponent,
    DirectivesComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  exports:[
    BindingComponent,
    ConditionComponent,
    PipesComponent,
    DirectivesComponent
  ]
})
export class UserModule { }
