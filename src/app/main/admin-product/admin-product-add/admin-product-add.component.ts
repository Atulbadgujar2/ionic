import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { FileToUpload } from 'src/app/core/models/file-upload/file-to-upload';
import { ProductModel } from 'src/app/core/models/product/product.model';
import { FileUploadService } from 'src/app/core/services/fileupload.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.scss'],
})
export class AdminProductAddComponent implements OnInit {

  theFile: any = null;
  messages: string[] = [];
   // Maximum file size allowed to be uploaded = 1MB
readonly MAX_SIZE: number = 1048576;
url : any ;

  modalTitle: string;
  modelId: number;
  GuidId : string;

   //contains tenant data
   public addProductdataModel: ProductModel = new ProductModel();

  constructor(private modalController: ModalController,   
    private productService : ProductService,
    private uploadService: FileUploadService,
    private navParams: NavParams,
    public toastController: ToastController) { }

  
  ngOnInit() {}

  
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";    
    await this.modalController.dismiss(onClosedData);
  }

  // add Product
  public addProduct() {
    // this.onSubmit = true;
    //validation
   
      this.productService.addProduct(this.addProductdataModel).subscribe(
        response => { 
          this.GuidId = response.guidId;    
        }).add(() => {
          this.uploadFile();
        });
    }
    
    radioGroupChange(event,caseCondition) {
      debugger;
      switch(caseCondition){
        case 1:
          this.addProductdataModel.isInStock = event.detail.value
          break;
          case 2:
          this.addProductdataModel.isFreeShipping = event.detail.value
          break;
          case 3:
          this.addProductdataModel.isCODAvailable = event.detail.value
          break;

      }
      
    }


  onFileChange(event) {
    debugger;
    this.theFile = null;
    if (event.target.files && event.target.files.length > 0) {
        // Don't allow file sizes over 1MB
        if (event.target.files[0].size < this.MAX_SIZE) {
            // Set theFile property
            this.theFile = event.target.files[0];
                  // Read the file
                  let reader = new FileReader();
                  reader.readAsDataURL(this.theFile);
                  reader.onload = (_event) => { 
                    this.url = reader.result; 
                }
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

      
      this.url = reader.result; 
      
      
      // POST to server
      this.uploadService.uploadFile(file).subscribe(resp => { 
          this.messages.push("Upload complete"); }).add(() => {        
            this.closeModal();
            this.showToasterOnButtonClick('Product Saved Successfully');
           });
  }
  
  // Read the file
  reader.readAsDataURL(theFile);
}

uploadFile(): void {
  debugger;
  this.readAndUploadFile(this.theFile);
}

async showToasterOnButtonClick(message) {
  const toast = await this.toastController.create({
    color: 'dark',
    duration: 2000,
    message: message,
   
  });

  await toast.present();
}




}
