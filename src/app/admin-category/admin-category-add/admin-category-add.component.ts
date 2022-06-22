import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryModel } from 'src/core/models/category.model';


@Component({
  selector: 'app-admin-category-add',
  templateUrl: './admin-category-add.component.html',
  styleUrls: ['./admin-category-add.component.scss'],
})
export class AdminCategoryAddComponent implements OnInit {
  modalTitle: string;
  modelId: number;
   //contains tenant data
   public addCategorydataModel: CategoryModel = new CategoryModel();


  constructor(
    private modalController: ModalController,
    private categoryService : CategoryService,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";    
    await this.modalController.dismiss(onClosedData);
  }

  // add Category
  public addCategory() {
    // this.addCategorydataModel.allowCustomersToSelectPageSize = 
    // this.addCategorydataModel.joB_CLASS_CODE_NUM = this.joB_CLASS.joB_CLASS_CODE_NUM
    // this.addCategorydataModel.joB_CLASS_CODE_FK = this.joB_CLASS.id
    // this.addCategorydataModel.description = this.joB_CLASS.description
    // this.onSubmit = true;
    //validation
   
      this.categoryService.addCategory(this.addCategorydataModel).subscribe(
        response => {
          // this.empId = response
          // this.CategoryChargesData.id = this.empId;
          // this.loaderEnabled = false;
          // this.toastNotificationService.success(NotificationAction.AddedSucessfully);
          // this.onCloseAddCategory(true);
        });
    }
  

}
