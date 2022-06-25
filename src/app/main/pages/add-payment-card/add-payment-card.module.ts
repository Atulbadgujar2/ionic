import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddPaymentCardPage } from './add-payment-card.page';

const routes: Routes = [
  {
    path: '',
    component: AddPaymentCardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddPaymentCardPage]
})
export class AddPaymentCardPageModule {}
