import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { CommunicationComponent } from './communication/communication.component';
import { ConditionComponent } from './condition/condition.component';
import { PipesComponent } from './condition/pipes/pipes.component';
import { Pipes2Component } from './condition/pipes2/pipes2.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    CommunicationComponent,
    ConditionComponent,
    PipesComponent,
    Pipes2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
