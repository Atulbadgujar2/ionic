/*

  Authors :  (Atul Badgujar)  
  Created : 14-March-2022
 

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
