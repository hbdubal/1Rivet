import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { EmployeeModule } from '../employee/employee.module';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    EmployeeModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class CoreModule { }
