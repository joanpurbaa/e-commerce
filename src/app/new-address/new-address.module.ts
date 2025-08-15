import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewAddressPageRoutingModule } from './new-address-routing.module';

import { NewAddressPage } from './new-address.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewAddressPageRoutingModule,
    SharedModule
  ],
  declarations: [NewAddressPage]
})
export class NewAddressPageModule {}
