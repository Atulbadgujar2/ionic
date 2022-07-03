import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
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

  modalTitle: string;
  modelId: number;
  GuidId : string;

   //contains tenant data
   public addProductdataModel: ProductModel = new ProductModel();

  constructor(private modalController: ModalController,   
    private productService : ProductService,
    private uploadService: FileUploadService,
    private navParams: NavParams) { }

  
  ngOnInit() {}

  
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";    
    await this.modalController.dismiss(onClosedData);
  }

  // add Product
  public addProduct() {
    debugger;
    this.addProductdataModel.isCODAvailable = true;
   
    this.addProductdataModel.metaKeywords="string";
    this.addProductdataModel.metaTitle="string";
    this.addProductdataModel.deliveryInstruction="string";
    this.addProductdataModel.name="string";
    this.addProductdataModel.categoryId = 1;
    this.addProductdataModel.fullDescription="string";
    this.addProductdataModel.stockQuantity = 1;
    this.addProductdataModel.minStockQuantity = 1
    this.addProductdataModel.displayStockQuantity = true;
    this.addProductdataModel.isFreeShipping = true;  
    this.addProductdataModel.isInStock= true;
    this.addProductdataModel.isNewGuid= true;

    this.addProductdataModel.showOnHomepage=true;
    this.addProductdataModel.offer=5;
    this.addProductdataModel.price=5;
    this.addProductdataModel.pricePerQuantity=5;

    this.addProductdataModel.onlySupportedPincode=5;

 
    this.addProductdataModel.fileUpload="string";
    this.GuidId = "a6ee7c60-6efd-4b9e-b7f1-1f552eb0c163"
    // this.onSubmit = true;
    //validation
   
      this.productService.addProduct(this.addProductdataModel).subscribe(
        response => {     
        }).add(() => {
          this.uploadFile();
        });
    }

 

    radioGroupChange(event) {
      debugger;
      this.addProductdataModel.showOnHomepage = event.detail.value
    }


  onFileChange(event) {
    debugger;
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
  debugger;
  this.readAndUploadFile(this.theFile);
}

}
