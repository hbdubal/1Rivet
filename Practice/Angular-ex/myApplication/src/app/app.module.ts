import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { BCardsComponent } from './b-cards/b-cards.component';
import { ItemCartComponent } from './product-item/item-cart/item-cart.component';
import { ShoppingCartComponent } from './product-item/shopping-cart/shopping-cart.component';
import { SmsAppComponent } from './login-component/sms-app/sms-app.component';
import { FormsModule } from '@angular/forms';
import { ShowPassComponent } from './login-component/show-pass/show-pass.component';
import { RangeComponent } from './login-component/range/range.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    BCardsComponent,
    ItemCartComponent,
    ShoppingCartComponent,
    SmsAppComponent,
    ShowPassComponent,
    RangeComponent,
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
