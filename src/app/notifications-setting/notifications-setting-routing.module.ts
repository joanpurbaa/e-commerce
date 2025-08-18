import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsSettingPage } from './notifications-setting.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationsSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsSettingPageRoutingModule {}
