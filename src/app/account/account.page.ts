import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: false,
})
export class AccountPage implements OnInit {
  logoutPopup: boolean = false;

  constructor() {}

  ngOnInit() {}

  setLogoutPopup() {
    this.logoutPopup = !this.logoutPopup;
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }
}
