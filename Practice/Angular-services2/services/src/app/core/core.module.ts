import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { EmployeeModule } from '../employee/employee.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EmployeeModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class CoreModule { }
