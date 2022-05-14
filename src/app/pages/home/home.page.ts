/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { DummyDataService } from 'src/app/services/dummy-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('mainSlider', { static: false }) mainSlider: IonSlides;


  slidesOptsHeader = {
    slidesPerView: 4,
  };
  slidesOptsProduct1 = {
    slidesPerView: 1.3,
  };

  img: any = 'assets/shop/1.jpg';
  img2: any = 'assets/shop/9.jpg';

  mainSliders = [];
  productSliderOne = [];
  forYou = [];

  constructor(
    private router: Router,
    private dummy: DummyDataService
  ) {
    this.mainSliders = this.dummy.catSlider;
    this.productSliderOne = this.dummy.productSlider;
    this.forYou = this.dummy.specialForYou;
  }

  ngOnInit() {
  }
  onSearch() {
    console.log('search page');
  }
  onNotification() {
    console.log('notification page');
  }
  onBookmark() {
    console.log('bookmark page');
  }
  onCart() {
    console.log('cart page');
  }

  onCategorySelect(item) {
    console.log('item', item);
    this.router.navigate(['main-category']);
  }
}
