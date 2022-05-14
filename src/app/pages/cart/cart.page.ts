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

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  activeNum: any;
  num = 1;
  constructor(private router: Router) {
    this.activeNum = '1';
  }

  ngOnInit() {
  }
  viewMore() {
    console.log('view more');
  }
  placeOrder() {
    console.log('place');
  }

  changeStepper(val) {
    console.log(val);
    // this.id = val;
    this.activeNum = val;
  }

  plus() {
    this.num = this.num + 1;
  }

  minus() {
    if (this.num === 1) {

    } else {
      this.num = this.num - 1;
    }
  }

  goToPayment() {
    this.router.navigate(['/payment']);
  }
}
