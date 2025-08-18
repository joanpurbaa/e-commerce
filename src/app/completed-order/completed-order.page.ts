import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-order',
  templateUrl: './completed-order.page.html',
  styleUrls: ['./completed-order.page.scss'],
  standalone: false,
})
export class CompletedOrderPage implements OnInit {
  presentingElement!: HTMLElement | null;

  constructor() {}

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }
}
