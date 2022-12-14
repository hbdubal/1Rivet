import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmpaddComponent } from './empadd/empadd.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    EmpaddComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  exports:[
    EmployeeFormComponent,
    EmployeeListComponent,
    EmpaddComponent
  ]
})
export class EmployeeModule { }
