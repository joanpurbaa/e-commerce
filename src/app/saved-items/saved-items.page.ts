import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-items',
  templateUrl: './saved-items.page.html',
  styleUrls: ['./saved-items.page.scss'],
  standalone: false,
})
export class SavedItemsPage implements OnInit {
  savedItem: any[] = [];

  constructor() {}

  ngOnInit() {
    this.loadSavedItem();
  }

  onNotificationClick() {
    console.log(true);
  }

  loadSavedItem() {
    this.savedItem = JSON.parse(localStorage.getItem('saved') || '[]');
  }


}
