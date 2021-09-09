import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  userRegister = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    isOng: [false, Validators.required],
  });

  ngOnInit(): void {}
  register() {
    var newUser = this.userRegister.value;
    this.http.get('http://localhost:3000/users').subscribe((data: any) => {
      const exist = data.filter((d: User) => d.email === newUser.email);
      console.log(newUser.email);
      if (exist.length !== 0) {
        console.log('Esse email já foi cadastrado');
      } else {
        this.http
          .post('http://localhost:3000/users', newUser)
          .subscribe((data: any) => {
            newUser = data;
            if (newUser.isOng === true) {
              this.router.navigate([`auth/registerong/${newUser.id}`]);
            } else {
              this.router.navigate(['auth']);
            }
          });
      }
    });
  }
}
