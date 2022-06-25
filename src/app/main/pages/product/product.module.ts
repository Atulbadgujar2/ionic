import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductPage } from './product.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
const routes: Routes = [
  {
    path: '',
    component: ProductPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductPage]
})
export class ProductPageModule { }
