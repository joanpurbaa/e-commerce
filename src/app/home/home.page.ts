import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  presentingElement!: HTMLElement | null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  goToNotification() {
    this.router.navigate(['/notifications']);
  }

  goToSearch() {
    this.router.navigate(['/search']);
  }
}
