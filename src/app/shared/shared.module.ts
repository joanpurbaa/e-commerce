import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TopHeaderComponent } from '../components/top-header/top-header.component';

@NgModule({
  declarations: [TopHeaderComponent],
  imports: [CommonModule, IonicModule],
  exports: [TopHeaderComponent],
})
export class SharedModule {}
