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
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private navCtr: NavController,
  ) { }

  ngOnInit() {
  }
  createAccount() {
    this.router.navigate(['signup']);
  }
  reset() {
    this.router.navigate(['forgot-password']);
  }
  signin() {
    this.navCtr.navigateRoot('tabs');
  }
}
