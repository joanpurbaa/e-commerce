import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentMethodPageRoutingModule } from './payment-method-routing.module';

import { PaymentMethodPage } from './payment-method.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentMethodPageRoutingModule,
    SharedModule
  ],
  declarations: [PaymentMethodPage]
})
export class PaymentMethodPageModule {}
