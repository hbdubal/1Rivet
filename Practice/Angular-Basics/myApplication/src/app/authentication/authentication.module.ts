import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    RegComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent
  ]
})
export class AuthenticationModule { }
