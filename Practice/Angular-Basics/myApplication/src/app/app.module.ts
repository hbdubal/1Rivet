import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirsrProjComponent } from './firsr-proj/firsr-proj.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { AssociateComponent } from './associate/associate.component';
import{LoginModule} from './login/login.module';
import{AuthenticationModule} from './authentication/authentication.module';

@NgModule({
  declarations: [
    AppComponent,
    FirsrProjComponent,
    CustomerComponent,
    SupplierComponent,
    AssociateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
