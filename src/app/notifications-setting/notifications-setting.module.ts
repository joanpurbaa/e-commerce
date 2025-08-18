import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsSettingPageRoutingModule } from './notifications-setting-routing.module';

import { NotificationsSettingPage } from './notifications-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsSettingPageRoutingModule
  ],
  declarations: [NotificationsSettingPage]
})
export class NotificationsSettingPageModule {}
