import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { FileToUpload } from 'src/app/core/models/file-upload/file-to-upload';
import { ProductModel } from 'src/app/core/models/product/product.model';
import { FileUploadService } from 'src/app/core/services/fileupload.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.scss'],
})
export class AdminProductEditComponent implements OnInit {

  url : any;
  theFile: any = null;
  messages: string[] = [];
  // Maximum file size allowed to be uploaded = 1MB
readonly MAX_SIZE: number = 1048576;

modalTitle: string;
modelId: number;
GuidId : string;
  constructor(private modalController: ModalController,   
    private productService : ProductService,
    public toastController: ToastController,
    private uploadService: FileUploadService,
    private navParams: NavParams) { }

  ngOnInit() {
    if(this.navParams.data.paramID != undefined && this.navParams.data.paramID != null)
    this.getProductData(this.navParams.data.paramID);
  }

     //contains tenant data
     public editProductdataModel: ProductModel = new ProductModel();

     async closeModal() {
      const onClosedData: string = "Wrapped Up!";    
      await this.modalController.dismiss(onClosedData);
    }
  
  // add Product
  public addProduct() {
    debugger;
    // this.editProductdataModel.isCODAvailable = true;
   
    // this.editProductdataModel.metaKeywords="string";
    // this.editProductdataModel.metaTitle="string";
    // this.editProductdataModel.deliveryInstruction="string";
    // this.editProductdataModel.name="string";
    // this.editProductdataModel.categoryId = 1;
    // this.editProductdataModel.fullDescription="string";
    // this.editProductdataModel.stockQuantity = 1;
    // this.editProductdataModel.minStockQuantity = 1
    // this.editProductdataModel.displayStockQuantity = true;
    // this.editProductdataModel.isFreeShipping = true;  
    // this.editProductdataModel.isInStock= true;
    // this.editProductdataModel.isNewGuid= true;

    // this.editProductdataModel.showOnHomepage=true;
    // this.editProductdataModel.offer=5;
    // this.editProductdataModel.price=5;
    // this.editProductdataModel.pricePerQuantity=5;

    // this.editProductdataModel.onlySupportedPincode=5;

 
    // this.editProductdataModel.fileUpload="string";
    // this.GuidId = "a6ee7c60-6efd-4b9e-b7f1-1f552eb0c163"
    // this.onSubmit = true;
    //validation
   
      this.productService.updateProductDetail(this.editProductdataModel).subscribe(
        response => {     
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
            // Read the file
            let reader = new FileReader();
 reader.readAsDataURL(this.theFile);
 reader.onload = (_event) => { 
   this.url = reader.result; }

   this.editProductdataModel.isNewGuid = true;

           
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
            this.showToasterOnButtonClick('Product Updated Successfully');
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
    this.editProductdataModel.showOnHomepage = event.detail.value
  }

  /*
     * Get grid data from server
     */
  // Get Client Entry  data
  public getProductData(modelId): void {
    this.productService.getProductDetail(modelId)
      .subscribe(
        response => {
          this.editProductdataModel = response;
          
          // this.getGridViewList(this.screenId);
        }).add(() => {
          this.url = this.editProductdataModel.imageUrl
          // this.loadingEnabled = false;
          console.log(this.editProductdataModel);
        });
  }

}
