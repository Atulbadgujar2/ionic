import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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

  constructor(public modalController: ModalController,
    private categoryService : CategoryService) {   
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

  async openEditModal() {
    const modal = await this.modalController.create({
      component: AdminCategoryEditComponent,
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
    this.categoryService.getCategoryList()
      .subscribe(
        response => {
          this.gridData = response;
          // this.getGridViewList(this.screenId);
        }).add(() => {
          // this.loadingEnabled = false;
        });
  }

  

  
     
}
