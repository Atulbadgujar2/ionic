/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DummyDataService } from 'src/app/services/dummy-data.service';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.page.html',
  styleUrls: ['./main-category.page.scss'],
})
export class MainCategoryPage implements OnInit {

  products = [];
  constructor(
    private router: Router,
    private dummy: DummyDataService
  ) {
    this.products = this.dummy.products;
  }

  ngOnInit() {
  }

  onCategorySelect(item) {
    console.log('item', item);
    this.router.navigate(['products']);
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

}
