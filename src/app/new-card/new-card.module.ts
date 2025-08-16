import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewCardPageRoutingModule } from './new-card-routing.module';

import { NewCardPage } from './new-card.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewCardPageRoutingModule,
    SharedModule
  ],
  declarations: [NewCardPage]
})
export class NewCardPageModule {}
