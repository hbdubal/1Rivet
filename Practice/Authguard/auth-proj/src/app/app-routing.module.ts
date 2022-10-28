import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { LoginComponent } from './auth/auth/login/login.component';
import { RegistrationComponent } from './auth/auth/registration/registration.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'form',
    component: ReactiveFormComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CoreModule]
})
export class AppRoutingModule { }
