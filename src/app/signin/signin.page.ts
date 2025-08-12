import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
  standalone: false,
})
export class SigninPage implements OnInit {
  registerForm!: FormGroup;
  filledInputStatus: boolean = false;
  showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      console.log(this.registerForm.value);
      console.log('data form tidak valid');
    }
  }

  showPasswordStatus() {
    this.showPassword = !this.showPassword;
  }
}
