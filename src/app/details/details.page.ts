import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: false,
})
export class DetailsPage {
  constructor() {}

  onNotificationClick() {
    console.log(true);
  }
}
