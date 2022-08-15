import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { CategoryModel } from 'src/app/core/models/category/category.model';
import { FileToUpload } from 'src/app/core/models/file-upload/file-to-upload';
import { CategoryService } from 'src/app/core/services/category.service';
import { FileUploadService } from 'src/app/core/services/fileupload.service';

@Component({
  selector: 'app-admin-category-edit',
  templateUrl: './admin-category-edit.component.html',
  styleUrls: ['./admin-category-edit.component.scss'],
})
export class AdminCategoryEditComponent implements OnInit {

  isFileThere: Boolean = false;
  
  url : any = null;
  theFile: any = null;
  messages: string[] = [];
  // Maximum file size allowed to be uploaded = 1MB
readonly MAX_SIZE: number = 1048576;
   //contains tenant data
   public editCategorydataModel: CategoryModel = new CategoryModel();


  modalTitle: string;
  modelId: number;
  GuidId : string;

  constructor(
    private modalController: ModalController,
    private categoryService : CategoryService,
    private uploadService: FileUploadService,
    private navParams: NavParams,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
    if(this.navParams.data.paramID != undefined && this.navParams.data.paramID != null)
    this.getCategoryData(this.navParams.data.paramID);

   
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";    
    await this.modalController.dismiss(onClosedData);
  }

  /*
     * Get grid data from server
     */
  // Get Client Entry  data
  public getCategoryData(modelId): void {
    this.categoryService.getCategoryDetail(modelId)
      .subscribe(
        response => {
          this.editCategorydataModel = response;
          
          // this.getGridViewList(this.screenId);
        }).add(() => {
          this.url = this.editCategorydataModel.imageUrl
          // this.loadingEnabled = false;
          if(this.url === null)
          {
            this.isFileThere = false;
          }
        });
  }

  
  // add Category
  public editCategory() {
  
    
   
      this.categoryService.updateCategoryDetail(this.editCategorydataModel).subscribe(
        response => {     
          this.GuidId = response.guidId;
        }).add(() => {        
          this.uploadFile();
          this.closeModal();        
        });
      

    
  }

  uploadFile(): void {
    this.readAndUploadFile(this.theFile);
  }

  onFileChange(event) {
    debugger;
    this.theFile = null;
    if (event.target.files && event.target.files.length > 0) {
        // Don't allow file sizes over 1MB
        if (event.target.files[0].size < this.MAX_SIZE) {
            // Set theFile property
            this.theFile = event.target.files[0];
            this.isFileThere = true; 
            let reader = new FileReader();

            // Read the file
 reader.readAsDataURL(this.theFile);
 reader.onload = (_event) => { 
   this.url = reader.result; }

   this.editCategorydataModel.isNewGuid = true;

           
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
          this.messages.push("Upload complete"); }).add(() => {        
            this.showToasterOnButtonClick('Category Updated Successfully');
          });
  }
  
  // Read the file
  reader.readAsDataURL(theFile);
}

async showToasterOnButtonClick(message) {
  const toast = await this.toastController.create({
    color: 'dark',
    duration: 2000,
    message: message,
   
  });

  await toast.present();
}

  radioGroupChange(event) {
    debugger;
    this.editCategorydataModel.showOnHomepage = event.detail.value
  }
}
