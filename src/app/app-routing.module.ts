import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },

  {
    path: 'signup',
    component: SignupComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'employee',
    component:EmployeeViewComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
