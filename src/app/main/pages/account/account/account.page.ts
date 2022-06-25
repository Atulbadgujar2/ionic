/*

  Authors :  (Atul Badgujar)  
  Created : 14-March-2022
 

*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  language: any;
  currency: any;
  paymentMethod: any;

  languages = ['English', 'Hindi'];
  paymentMethods = ['Paypal', 'Credit Card'];
  currencies = ['USD', 'BRL', 'EUR'];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  logOut() {
    this.router.navigate(['login'])
  }
}
