import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { UserandpassValidators } from './userandpass.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required,
    Validators.minLength(3)],
      UserandpassValidators.shouldBeUnique,
    ),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  })
  login() {
    this.form.setErrors({
      invalidLogin: true,
    });

  }
}
