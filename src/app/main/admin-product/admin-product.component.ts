import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { IdentificationModel } from 'src/app/core/models/identification.model';
import { ProductService } from 'src/app/core/services/product.service';
import { AdminProductAddComponent } from './admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './admin-product-edit/admin-product-edit.component';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss'],
})
export class AdminProductComponent implements OnInit {

  gridData : any;
  identificationModel : IdentificationModel = new IdentificationModel();

  constructor(public modalController: ModalController,
    private productService : ProductService,
    public toastController: ToastController) { }

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
        this.getDataList();
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }
  
  async openEditModal(id) {
    debugger;
    const modal = await this.modalController.create({
      component: AdminProductEditComponent,
      componentProps: {
        "paramID": id,
        "paramTitle": "Test Title"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      debugger;
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        this.getDataList();
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
          this.gridData = response;
          // this.getGridViewList(this.screenId);
        }).add(() => {
          // this.loadingEnabled = false;
        });
  }

  async showToasterOnButtonClick(message) {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: message,
     
    });
  
    await toast.present();
  }

  public deleteProduct(id) : void {
    this.identificationModel.uniquE_ID = id;
    this.identificationModel.tenanT_ID = '1';
    this.productService.deleteProduct(this.identificationModel).subscribe(
      response => {     
       
      }).add(() => {        
        this.showToasterOnButtonClick('Product Deleted Successfully');
        this.getDataList();
      });
  }

}
