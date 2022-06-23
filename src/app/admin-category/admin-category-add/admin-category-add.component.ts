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
    debugger;
    this.addCategorydataModel.allowCustomersToSelectPageSize = true;
   
    this.addCategorydataModel.name= "string";
    this.addCategorydataModel.metaKeywords="string";
    this.addCategorydataModel.metaTitle="string";
    this.addCategorydataModel.pageSizeOptions="string";
    this.addCategorydataModel.description="string";
    this.addCategorydataModel.categoryTemplateId = 1;
    this.addCategorydataModel.metaDescription="string";
    this.addCategorydataModel.parentCategoryId = 1;
    this.addCategorydataModel.pictureId = 1
    this.addCategorydataModel.pageSize = 1;
    this.addCategorydataModel.allowCustomersToSelectPageSize = true;
    this.addCategorydataModel.showOnHomepage= true;
    this.addCategorydataModel.includeInTopMenu= true;
    this.addCategorydataModel.subjectToAcl= true;
    this.addCategorydataModel.limitedToStores= true;
    this.addCategorydataModel.published= true;
    this.addCategorydataModel.displayOrder = 1;
    this.addCategorydataModel.priceRangeFiltering= true;
    this.addCategorydataModel.priceFrom = 0;
    this.addCategorydataModel.priceTo= 0;
    this.addCategorydataModel.manuallyPriceRange = true;
    // this.addCategorydataModel.fileUpload="string";
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
