/*

  Authors :  (Atul Badgujar)  
  Created : 14-March-2022
 

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
    'assets/products/tomatoes.jpg',
    'assets/products/Tomato1.jpg',
    'assets/products/Tomato2.jpg',
    'assets/products/Tomato3.jpg',
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
