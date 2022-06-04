import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss'],
})
export class AdminCategoryComponent implements OnInit {

  constructor(public modalController: ModalController) {
   
  }


  ngOnInit() {
    let currentModal = null;
    async function openModal(opts = {}) {
      debugger;
      const modal = await this.modalController.create({
        component: 'modal-content',
        ...opts,
      });
      modal.present();

      currentModal = modal;
    }

  };

  
     
}
