import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './registerong.component.html',
  styleUrls: ['./registerong.component.scss'],
})
export class RegisterOngComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  userLogin = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    name: ['', Validators.required],
    Adress: ['', Validators.required],
    Adress2: ['', Validators.required],
    City: ['', Validators.required],
    State: ['', Validators.required],
    PostalCode: ['', Validators.required],
  });

  ngOnInit(): void {}
  login() {
    console.log(this.userLogin.value);
  }
}
