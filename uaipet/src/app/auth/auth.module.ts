import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterOngComponent } from './RegisterOng/registerong.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    RegisterOngComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
