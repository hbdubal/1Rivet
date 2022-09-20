import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomresRoutingModule } from './customres-routing.module';
import { CustomresComponent } from './customres.component';
import { CustomersFormComponent } from './customers-form/customers-form.component';
import { CustomersListComponent } from './customers-list/customers-list.component';


@NgModule({
  declarations: [
    CustomresComponent,
    CustomersFormComponent,
    CustomersListComponent
  ],
  imports: [
    CommonModule,
    CustomresRoutingModule
  ],
  exports:[
   CustomersFormComponent,
   CustomersListComponent
  ]
})
export class CustomresModule { }
