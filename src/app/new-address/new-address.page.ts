import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.page.html',
  styleUrls: ['./new-address.page.scss'],
  standalone: false,
})
export class NewAddressPage implements OnInit {
  newAddressForm!: FormGroup;
  filledInputStatus: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.newAddressForm = this.formBuilder.group({
      addressNickname: ['', [Validators.required]],
      fullAddress: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.newAddressForm.valid) {
      console.log(this.newAddressForm.value);
    } else {
      console.log(this.newAddressForm.value);
      console.log('data form tidak valid');
    }
  }
}
