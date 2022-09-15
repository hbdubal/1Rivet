import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthCardComponent } from './components/auth-card/auth-card.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { SwitccaseExampleComponent } from './components/switccase-example/switccase-example.component'
import { BeveragesComponent } from './beverages/beverages.component';
import { BeveragesChildComponent } from './beverages-child/beverages-child.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthCardComponent,
    ShoppingcartComponent,
    SwitccaseExampleComponent,
    BeveragesComponent,
    BeveragesChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
