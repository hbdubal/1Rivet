import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import {HttpClientModule} from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { Card2Component } from './card2/card2.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentService } from './services/student.service';
// import { DesignutilityService } from './services/designutility.service';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    CardComponent,
    Card2Component,
    ContactComponent,
    PageNotFoundComponent,
    HomeComponent,
    StudentComponent,
    StudentDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers:[StudentService]
})
export class AppModule { }
