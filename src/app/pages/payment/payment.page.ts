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
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  value;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkedChange(eve) {
    console.log(eve.detail.value);
    this.value = eve.detail.value;
  }

  goToCart() {
    this.router.navigate(['/orders']);
  }

}
