import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { IdentificationModel } from 'src/app/core/models/identification.model';
import { CategoryService } from 'src/app/core/services/category.service';
import { AdminCategoryAddComponent } from './admin-category-add/admin-category-add.component';
import { AdminCategoryEditComponent } from './admin-category-edit/admin-category-edit.component';


@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss'],
})
export class AdminCategoryComponent implements OnInit {

  gridData : any;
  identificationModel : IdentificationModel = new IdentificationModel();

  constructor(public modalController: ModalController,
    private categoryService : CategoryService,
    public toastController: ToastController) {   
  }

  dataReturned: any;
  ngOnInit() {
    this.getDataList();
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

  async openEditModal(id) { 
    const modal = await this.modalController.create({
      component: AdminCategoryEditComponent,
      componentProps: {
        "paramID": id,
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
    this.categoryService.getCategoryList()
      .subscribe(
        response => {
          this.gridData = response;
          // this.getGridViewList(this.screenId);
        }).add(() => {
          // this.loadingEnabled = false;
        });
  }

  public deleteCategory(id) : void {
    this.identificationModel.uniquE_ID = id;
    this.identificationModel.tenanT_ID = '1';
    this.categoryService.deleteCategory(this.identificationModel).subscribe(
      response => {     
       
      }).add(() => {        
        this.handleButtonClick();
      });
  }


  async handleButtonClick() {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Category Deleted SuccessFully',
     
    });

    await toast.present();
  }

  

  
     
}
