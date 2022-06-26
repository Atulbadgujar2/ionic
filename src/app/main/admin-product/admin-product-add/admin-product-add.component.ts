import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.scss'],
})
export class AdminProductAddComponent implements OnInit {

  constructor(private modalController: ModalController,) { }

  
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";    
    await this.modalController.dismiss(onClosedData);
  }

  ngOnInit() {}

}
