import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { ParentComponentsComponent } from './parent-components/parent-components.component';
import { ChildComponentsComponent } from './parent-components/child-components/child-components.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ParentComponentsComponent,
    ChildComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
