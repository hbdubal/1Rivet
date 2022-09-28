import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component'
import { Card2Component } from './card2/card2.component';  
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'card2',
    component: Card2Component,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  },
  {
    path: 'studentlist',
    component: StudentDataComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
