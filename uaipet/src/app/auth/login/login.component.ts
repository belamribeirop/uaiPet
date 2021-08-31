import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  userLogin = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })


  ngOnInit(): void {
  }
  login(){
    console.log(this.userLogin.value);

  }

}
