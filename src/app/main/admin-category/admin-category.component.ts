import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdminCategoryAddComponent } from './admin-category-add/admin-category-add.component';


@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss'],
})
export class AdminCategoryComponent implements OnInit {

  constructor(public modalController: ModalController) {   
  }

  dataReturned: any;
  ngOnInit() {
    
  };

  async openModal() {
    const modal = await this.modalController.create({
      component: AdminCategoryAddComponent,
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
