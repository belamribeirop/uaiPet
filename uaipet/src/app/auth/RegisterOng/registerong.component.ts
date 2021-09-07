import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

interface ongUser {
  name: string;
  telefone: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  description: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './registerong.component.html',
  styleUrls: ['./registerong.component.scss'],
})
export class RegisterOngComponent implements OnInit {
  userId: string = '';
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params) => (this.userId = params['id']));
  }

  userLogin = this.fb.group({
    name: ['', Validators.required],
    telefone: ['', Validators.required],
    address: ['', Validators.required],
    address2: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    postalCode: ['', Validators.required],
    description: ['', Validators.required],
  });

  ngOnInit(): void {}
  login() {
    const u: ongUser = this.userLogin.value;
    const ong = {
      name: u.name,
      phone: u.telefone,
      description: u.description,
      address: u.address,
      address2: u.address2,
      city: u.city,
      state: u.state,
      postalCode: u.postalCode,
      userId: this.userId,
    };
    console.log(ong);
    this.http
      .post('http://localhost:3000/abrigos', ong)
      .subscribe((data: any) => {
        this.router.navigate(['auth']);
      });
  }
}
