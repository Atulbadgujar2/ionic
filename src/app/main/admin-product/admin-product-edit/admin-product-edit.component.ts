import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductModel } from 'src/app/core/models/product/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.scss'],
})
export class AdminProductEditComponent implements OnInit {

  constructor(private modalController: ModalController,   
    private productService : ProductService) { }

  ngOnInit() {}

     //contains tenant data
     public editProductdataModel: ProductModel = new ProductModel();

  // add Product
  public addProduct() {
    debugger;
    this.editProductdataModel.isCODAvailable = true;
   
    this.editProductdataModel.metaKeywords="string";
    this.editProductdataModel.metaTitle="string";
    this.editProductdataModel.deliveryInstruction="string";
    this.editProductdataModel.name="string";
    this.editProductdataModel.categoryId = 1;
    this.editProductdataModel.fullDescription="string";
    this.editProductdataModel.stockQuantity = 1;
    this.editProductdataModel.minStockQuantity = 1
    this.editProductdataModel.displayStockQuantity = true;
    this.editProductdataModel.isFreeShipping = true;  
    this.editProductdataModel.isInStock= true;
    this.editProductdataModel.isNewGuid= true;

    this.editProductdataModel.showOnHomepage=true;
    this.editProductdataModel.offer=5;
    this.editProductdataModel.price=5;
    this.editProductdataModel.pricePerQuantity=5;

    this.editProductdataModel.onlySupportedPincode=5;

 
    this.editProductdataModel.fileUpload="string";
    // this.GuidId = "a6ee7c60-6efd-4b9e-b7f1-1f552eb0c163"
    // this.onSubmit = true;
    //validation
   
      this.productService.addProduct(this.editProductdataModel).subscribe(
        response => {     
        }).add(() => {
          // this.uploadFile();
        });
    }

}
