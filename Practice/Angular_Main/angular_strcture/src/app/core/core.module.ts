import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { UserModule } from '../user/user.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class CoreModule { }
