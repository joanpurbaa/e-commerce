import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsPageRoutingModule } from './notifications-routing.module';

import { NotificationsPage } from './notifications.page';
import { SharedModule } from '../shared/shared.module';
import { Router } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsPageRoutingModule,
    SharedModule,
  ],
  declarations: [NotificationsPage],
})
export class NotificationsPageModule {
  constructor(private router: Router) {}

  onBackClick() {
    this.router.navigate(['home']);
  }

  onNotificationClick() {
    console.log(false);
  }
}
