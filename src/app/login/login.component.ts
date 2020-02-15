import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),



  })




}
