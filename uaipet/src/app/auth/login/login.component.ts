import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) {}

  userLogin = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}
  login() {
    console.log();
    const user = this.userLogin.value;
    this.http.get('http://localhost:3000/users').subscribe((data: any) => {
      const exist = data.filter(
        (d: User) => d.Email === user.email && d.Password === user.password
      );
      if (exist.length === 0) {
        console.log('Usuario ou senha inválidos');
      } else {
        this.auth.user = exist[0];
        this.router.navigate(['']);
      }
      console.log(exist);
    });
  }
}
