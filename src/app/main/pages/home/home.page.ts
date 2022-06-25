/*

  Authors :  (Atul Badgujar)  
  Created : 14-March-2022
 

*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { DummyDataService } from 'src/app/core/services/dummy-data.service';

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

  img: any = 'assets/shop/home1.jpg';
  img2: any = 'assets/shop/home3.jpg';

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
    this.router.navigate(['/home2']);
  
  }

  onCategorySelect(item) {
    console.log('item', item);
    this.router.navigate(['main-category']);
  }
}
