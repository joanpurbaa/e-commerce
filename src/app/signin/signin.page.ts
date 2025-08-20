import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface CurrentUser {
  email: string;
  password: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
  standalone: false,
})
export class SigninPage implements OnInit {
  loginForm!: FormGroup;
  filledInputStatus: boolean = false;
  showPassword: boolean = false;
  currentUser: CurrentUser[] = [];
  invalidCredential: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const storedData = JSON.parse(localStorage.getItem('users') || '[]');

    const user = storedData.find(
      (data: any) =>
        data.email === this.loginForm.value.email &&
        data.password === this.loginForm.value.password
    );

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('token', JSON.stringify(this.loginForm.value.email));

      this.router.navigate(['home']);
    } else {
      this.invalidCredential = true;
    }
  }

  showPasswordStatus() {
    this.showPassword = !this.showPassword;
  }
}
