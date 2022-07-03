import { HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

import { CategoryModel } from 'src/app/core/models/category/category.model';
import { FileToUpload } from 'src/app/core/models/file-upload/file-to-upload';
import { CategoryService } from 'src/app/core/services/category.service';
import { FileUploadService } from 'src/app/core/services/fileupload.service';


@Component({
  selector: 'app-admin-category-add',
  templateUrl: './admin-category-add.component.html',
  styleUrls: ['./admin-category-add.component.scss'],
})

export class AdminCategoryAddComponent implements OnInit {

  theFile: any = null;
  messages: string[] = [];
   // Maximum file size allowed to be uploaded = 1MB
readonly MAX_SIZE: number = 1048576;

  modalTitle: string;
  modelId: number;
  GuidId : string;
 
   //contains tenant data
   public addCategorydataModel: CategoryModel = new CategoryModel();

 
      // Maximum file size allowed to be uploaded = 1MB
      // const MAX_SIZE: number = 1048576;

  constructor(
    private modalController: ModalController,
    private categoryService : CategoryService,
    private uploadService: FileUploadService,
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
    this.addCategorydataModel.allowCustomersToSelectPageSize = true;
   
    this.addCategorydataModel.metaKeywords="string";
    this.addCategorydataModel.metaTitle="string";
    this.addCategorydataModel.pageSizeOptions="string";
   
    this.addCategorydataModel.categoryTemplateId = 1;
    this.addCategorydataModel.metaDescription="string";
    this.addCategorydataModel.parentCategoryId = 1;
    this.addCategorydataModel.pictureId = 1
    this.addCategorydataModel.pageSize = 1;
    this.addCategorydataModel.allowCustomersToSelectPageSize = true;  
    this.addCategorydataModel.includeInTopMenu= true;
    this.addCategorydataModel.subjectToAcl= true;
    this.addCategorydataModel.limitedToStores= true;
    this.addCategorydataModel.published= true;
    this.addCategorydataModel.displayOrder = 1;
    this.addCategorydataModel.priceRangeFiltering= true;
    this.addCategorydataModel.priceFrom = 0;
    this.addCategorydataModel.priceTo= 0;
    this.addCategorydataModel.manuallyPriceRange = true;
    this.addCategorydataModel.fileUpload="string";
    this.GuidId = "a6ee7c60-6efd-4b9e-b7f1-1f552eb0c163"
    // this.onSubmit = true;
    //validation
   
      this.categoryService.addCategory(this.addCategorydataModel).subscribe(
        response => {     
        }).add(() => {
          this.uploadFile();
        });
    }

 

    radioGroupChange(event) {
      debugger;
      this.addCategorydataModel.showOnHomepage = event.detail.value
    }


  onFileChange(event) {
    this.theFile = null;
    if (event.target.files && event.target.files.length > 0) {
        // Don't allow file sizes over 1MB
        if (event.target.files[0].size < this.MAX_SIZE) {
            // Set theFile property
            this.theFile = event.target.files[0];
        }
        else {
            // Display error message
            this.messages.push("File: " + event.target.files[0].name + " is too large to upload.");
        }
    }
}

private readAndUploadFile(theFile: any) {
  let file = new FileToUpload();
  
  // Set File Information
  file.fileName = theFile.name;
  file.fileSize = theFile.size;
  file.fileType = theFile.type;
  file.lastModifiedTime = theFile.lastModified;
  file.lastModifiedDate = theFile.lastModifiedDate;
  file.PictureGuidId = this.GuidId;
  
  // Use FileReader() object to get file to upload
  // NOTE: FileReader only works with newer browsers
  let reader = new FileReader();
  
 // Setup onload event for reader
  reader.onload = () => {
      // Store base64 encoded representation of file
      file.fileAsBase64 = reader.result.toString();
      
      // POST to server
      this.uploadService.uploadFile(file).subscribe(resp => { 
          this.messages.push("Upload complete"); });
  }
  
  // Read the file
  reader.readAsDataURL(theFile);
}

uploadFile(): void {
  this.readAndUploadFile(this.theFile);
}
  

}
