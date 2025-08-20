import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Users {
  fullname: string;
  email: string;
  password: string;
}

interface User {
  user: Users[];
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: false,
})
export class SignupPage implements OnInit {
  registerForm!: FormGroup;
  filledInputStatus: boolean = false;
  showPassword: boolean = false;
  users: User[] = [];
  emailIsUsed: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const storedData = JSON.parse(localStorage.getItem('users') || '[]');

      const user = storedData.find(
        (data: any) => data.email === this.registerForm.value.email
      );

      if (user) {
        this.emailIsUsed = true;
      } else {
        const newUsers = Array.isArray(this.registerForm.value)
          ? this.registerForm.value
          : [this.registerForm.value];

        this.users = [...newUsers, ...this.users];

        localStorage.setItem('users', JSON.stringify(this.users));

        this.router.navigate(['signin']);
      }
    } else {
      console.log(this.registerForm.value);
      console.log('data form tidak valid');
    }
  }

  showPasswordStatus() {
    this.showPassword = !this.showPassword;
  }
}
