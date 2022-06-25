/*

  Authors :  (Atul Badgujar)  
  Created : 14-March-2022
 

*/
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private navCtr: NavController
  ) { }

  ngOnInit() {
  }
  signup() {

  }
  login() {
    this.navCtr.back();
  }
}
