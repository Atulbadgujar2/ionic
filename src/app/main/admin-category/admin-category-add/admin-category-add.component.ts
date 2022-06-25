import { HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

import { CategoryModel } from 'src/app/core/models/category/category.model';
import { CategoryService } from 'src/app/core/services/category.service';


@Component({
  selector: 'app-admin-category-add',
  templateUrl: './admin-category-add.component.html',
  styleUrls: ['./admin-category-add.component.scss'],
})

export class AdminCategoryAddComponent implements OnInit {
  readonly MAX_SIZE: number = 1048576;
  modalTitle: string;
  modelId: number;
// ...
selectedFile: File;
  
  file: any;

   //contains tenant data
   public addCategorydataModel: CategoryModel = new CategoryModel();

 
      // Maximum file size allowed to be uploaded = 1MB
      // const MAX_SIZE: number = 1048576;

  constructor(
    private modalController: ModalController,
    private categoryService : CategoryService,
    private navParams: NavParams
  ) {
// Maximum file size allowed to be uploaded = 1MB

   }

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

    if (this.file.length === 0) {
      return;
    }

    const formData = new FormData();

    for(let file of this.file){
      formData.append(file.name, file);
    }
  

    const uploadReq = new HttpRequest('POST', `api/FileUpload`, formData, {
      reportProgress: true,
    });


    // // uploadFile = (files) => {
    //   if (files.length === 0) {
    //     return;
    //   }
    //   let fileToUpload = <File>files[0];
    //   const formData = new FormData();
    //   formData.append('file', fileToUpload, fileToUpload.name);

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
   
      this.categoryService.addCategory(this.addCategorydataModel,formData).subscribe(
        response => {
          // this.empId = response
          // this.CategoryChargesData.id = this.empId;
          // this.loaderEnabled = false;
          // this.toastNotificationService.success(NotificationAction.AddedSucessfully);
          // this.onCloseAddCategory(true);
        });
    }

  //   onFileChange(event) {
  //     this.theFile = null;
  //     if (event.target.files && event.target.files.length > 0) {
  //         // Don't allow file sizes over 1MB
  //         if (event.target.files[0].size < MAX_SIZE) {
  //             // Set theFile property
  //             this.theFile = event.target.files[0];
  //         }
  //         else {
  //             // Display error message
  //             // this.messages.push("File: " + event.target.files[0].name + " is too large to upload.");
  //         }
  //     }
  // }


onSelectFile($event, file) {
  debugger;
    this.file = file;
  }

  upload(file : any) {
    debugger;
    // ...
    // this.selectedFile = files[0];
  }

  onFileChange(event) {
    debugger;
    //  this.theFile = null;
    if (event.target.files && event.target.files.length > 0) {
        // Don't allow file sizes over 1MB
        if (event.target.files[0].size < this.MAX_SIZE) {
            // Set theFile property
            // this.theFile = event.target.files[0];
        }
        else {
            // Display error message
            // this.messages.push("File: " + event.target.files[0].name + " is too large to upload.");
        }
    }
}
  

}
