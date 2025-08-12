import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
  standalone: false,
})
export class ResetPasswordPage implements OnInit {
  resetPasswordForm!: FormGroup;
  showPassword: boolean = false;
  showConfirmedPassword: boolean = false;
  successPopupStatus: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]],
    });
  }

  showPasswordStatus() {
    this.showPassword = !this.showPassword;
  }

  showConfirmedPasswordStatus() {
    this.showConfirmedPassword = !this.showConfirmedPassword;
  }

  passwordsMatch(): boolean {
    const password = this.resetPasswordForm.get('password')?.value;
    const confirmPassword =
      this.resetPasswordForm.get('confirmPassword')?.value;

    return password && confirmPassword && password === confirmPassword;
  }

  isFormValid(): boolean {
    return this.resetPasswordForm.valid && this.passwordsMatch();
  }

  onSubmit() {
    if (this.isFormValid()) {
      console.log(
        'Password reset successful:',
        this.resetPasswordForm.get('password')?.value
      );
    } else {
      console.log('Form is not valid');
      this.resetPasswordForm.markAllAsTouched();
    }
  }

  setSuccessPopupStatus() {
    this.successPopupStatus = !this.successPopupStatus;
  }
}
