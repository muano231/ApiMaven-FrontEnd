import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signinForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.signinForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  async onSubmit() {
    if (this.signinForm.invalid) return alert("tous les champs doivent être saisis");
    this.authService.login(this.signinForm.value.username, this.signinForm.value.password);

  }

}
