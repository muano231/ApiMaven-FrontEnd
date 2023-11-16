import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../signin/signin.component.css']
})
export class RegisterComponent {
  registerForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  async onSubmit(): Promise<void> {
    if (this.registerForm.invalid) return alert("tous les champs doivent être saisis");

    if (this.registerForm.value.password == this.registerForm.value.confirmPassword) {
      this.authService.signup(this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password);
    } else {
      return alert("Les mots de passe ne sont pas identiques");
    }
  }

}
