import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children:[
      {
        path: '',
        pathMatch: "full",
        redirectTo: "employee-form"
      },
      {
        path:'employee-form',
        component:EmployeeFormComponent
      },
      // {
      //   path:'employee-list',
      //   component:EmployeeListComponent
      // },
      {
        path:'employee-details',
        component:EmployeeDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,ReactiveFormsModule]
})
export class EmployeeRoutingModule { }
