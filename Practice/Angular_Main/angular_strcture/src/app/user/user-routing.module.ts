import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { ConditionComponent } from './condition/condition.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children:[
      // {
      //   path: '',
      //   pathMatch: "full",
      //   redirectTo: "binding"
      // },
      // {
      //   path:'communication',
      //   component:CommunicationComponent
      // },
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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
