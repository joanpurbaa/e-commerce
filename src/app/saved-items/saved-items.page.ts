import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-items',
  templateUrl: './saved-items.page.html',
  styleUrls: ['./saved-items.page.scss'],
  standalone: false,
})
export class SavedItemsPage {
  constructor() {}

  onNotificationClick() {
    console.log(true);
  }
}
