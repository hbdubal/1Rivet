import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthCardComponent } from './components/auth-card/auth-card.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { SwitccaseExampleComponent } from './components/switccase-example/switccase-example.component'
import { BeveragesComponent } from './beverages/beverages.component';
import { BeveragesChildComponent } from './beverages-child/beverages-child.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthCardComponent,
    ShoppingcartComponent,
    SwitccaseExampleComponent,
    BeveragesComponent,
    BeveragesChildComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
