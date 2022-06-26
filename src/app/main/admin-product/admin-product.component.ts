import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdminProductAddComponent } from './admin-product-add/admin-product-add.component';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss'],
})
export class AdminProductComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  dataReturned: any;

  ngOnInit() {}

  async openModal() {
    const modal = await this.modalController.create({
      component: AdminProductAddComponent,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      debugger;
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

}
