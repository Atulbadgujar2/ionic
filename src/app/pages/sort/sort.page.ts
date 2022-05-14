/*

  Authors :  (Atul Badgujar)  
  Created : 14-March-2022
 

*/
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.page.html',
  styleUrls: ['./sort.page.scss'],
})
export class SortPage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  sort(si) {
    this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
