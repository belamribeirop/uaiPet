import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './loginong.component.html',
  styleUrls: ['./loginong.component.scss']
})
export class loginongComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  userLogin = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    name: ['', Validators.required],
    Adress:['', Validators.required ],
    Adress2:['', Validators.required ],
    City:['',Validators.required],
    State:['', Validators.required],
    PostalCode:['',Validators.required]

  })


  ngOnInit(): void {
  }
  login(){
    console.log(this.userLogin.value);

  }

}