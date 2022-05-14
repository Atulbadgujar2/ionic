/*

  Authors :  (Atul Badgujar)  
  Created : 14-March-2022
 

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
