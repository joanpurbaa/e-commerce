import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.page.html',
  styleUrls: ['./new-card.page.scss'],
  standalone: false,
})
export class NewCardPage implements OnInit {
  newCardForm!: FormGroup;
  cardNumber: string = '';
  expiryDate: string = '';
  securityCode: string = '';
  successPopupStatus: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.newCardForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required]],
      expiryDate: ['', [Validators.required]],
      securityCode: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.newCardForm.valid) {
      console.log(this.newCardForm.value);
    } else {
      console.log(this.newCardForm.value);
      console.log('data form tidak valid');
    }
  }

  setSuccessPopupStatus() {
    this.successPopupStatus = !this.successPopupStatus;
  }
}
