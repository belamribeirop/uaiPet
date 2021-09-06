import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import {loginongComponent} from './login/loginong.component';

const routes: Routes = [
  { path: '', component: AuthComponent, children: [
    { path: 'register', component: RegisterComponent},
    { path: '', component: LoginComponent},
    {path: '', component:loginongComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
