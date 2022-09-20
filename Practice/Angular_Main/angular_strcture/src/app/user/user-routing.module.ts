import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { ConditionComponent } from './condition/condition.component';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children:[
      {
        path: '',
        pathMatch: "full",
        redirectTo: "condition"
      },
      // {
      //   path:'communication',
      //   component:CommunicationComponent
      // },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'binding',
        component:BindingComponent
      },
      {
        path:'pipes',
        component:PipesComponent
      },
      {
        path:'condition',
        component:ConditionComponent
      },
      {
        path:'directives',
        component:DirectivesComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
