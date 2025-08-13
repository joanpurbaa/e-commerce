import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TopHeaderComponent } from '../components/top-header/top-header.component';
import { BottomTabBarComponent } from '../components/bottom-tab-bar/bottom-tab-bar.component';

@NgModule({
  declarations: [TopHeaderComponent, BottomTabBarComponent],
  imports: [CommonModule, IonicModule],
  exports: [TopHeaderComponent, BottomTabBarComponent],
})
export class SharedModule {}
