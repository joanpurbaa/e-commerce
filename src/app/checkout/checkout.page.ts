import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: false,
})
export class CheckoutPage implements OnInit {
  successPopupStatus: boolean = false;

  constructor() {}

  ngOnInit() {}

  setSuccessPopupStatus() {
    this.successPopupStatus = !this.successPopupStatus;
  }
}
