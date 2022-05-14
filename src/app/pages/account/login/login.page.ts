/*

  Authors :  (Atul Badgujar)  
  Created : 14-March-2022
 

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
