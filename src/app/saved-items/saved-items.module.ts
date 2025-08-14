import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedItemsPageRoutingModule } from './saved-items-routing.module';

import { SavedItemsPage } from './saved-items.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedItemsPageRoutingModule,
    SharedModule,
  ],
  declarations: [SavedItemsPage],
})
export class SavedItemsPageModule {}
