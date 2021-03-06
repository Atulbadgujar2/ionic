/*

  Authors :  (Atul Badgujar)  
  Created : 14-March-2022
 

*/
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterPage } from '../filter/filter.page';
import { Router } from '@angular/router';
import { SortPage } from '../sort/sort.page';
import { DummyDataService } from 'src/app/services/dummy-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  dummyData = [];
  constructor(
    public modalController: ModalController,
    private router: Router,
    private dummy: DummyDataService
  ) {
    this.dummyData = this.dummy.products;
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
  sort() {
    console.log('sort');
  }

  async filter() {
    const modal = await this.modalController.create({
      component: FilterPage,
      componentProps: { value: 123 }
    });

    await modal.present();

  }

  async sorting() {
    const modal = await this.modalController.create({
      component: SortPage,
      componentProps: { value: 123 }
    });

    await modal.present();

  }
  product() {
    this.router.navigate(['product']);
  }
}
