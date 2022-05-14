/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DummyDataService } from 'src/app/services/dummy-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  slidesOptsProduct1 = {
    slidesPerView: 1.3,
  };
  productSliderOne = [];

  size: any = 6;
  images: any[] = [
    'assets/products/1.jpg',
    'assets/products/4.jpg',
    'assets/products/5.jpeg',
    'assets/products/6.jpg',
  ];
  constructor(
    public toastController: ToastController,
    private router: Router,
    private dummy: DummyDataService
  ) {
    this.productSliderOne = this.dummy.productSlider;
  }

  ngOnInit() {
  }

  async wishlist() {
    const toast = await this.toastController.create({
      message: 'Added to wishlist',
      duration: 2000
    });
    toast.present();
  }

  async cart() {
    const toast = await this.toastController.create({
      message: 'Added to cart',
      duration: 2000
    });
    toast.present();

    this.router.navigate(['/cart']);
  }

  onCart() {

  }
  onCategorySelect(item) {
    this.router.navigate(['']);
  }

  changeSize(val) {
    this.size = val;
  }

}
