import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductService } from 'src/app/core/services/product.service';
import { AdminProductAddComponent } from './admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './admin-product-edit/admin-product-edit.component';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss'],
})
export class AdminProductComponent implements OnInit {

  constructor(public modalController: ModalController,
    private productService : ProductService,) { }

  dataReturned: any;

  ngOnInit() : void {
    this.getDataList();
  }

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
  
  async openEditModal() {
    debugger;
    const modal = await this.modalController.create({
      component: AdminProductEditComponent,
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

   /*
     * Get grid data from server
     */
  // Get Client Entry  data
  public getDataList(): void {
    this.productService.getProductList()
      .subscribe(
        response => {
          // this.gridDataList = response;
          // this.getGridViewList(this.screenId);
        }).add(() => {
          // this.loadingEnabled = false;
        });
  }

}
