//===============================================================================
// © 2021.  All rights reserved.
// Original Author: Atul Badgujar
// Original Date: 26 Feb 2021
//==============================================================================


import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { BaseService } from "./base.service";
import { HttpErrorHandlerService } from "./http-error-handler.service";
import { ProductModel } from "src/app/core/models/product/product.model";

@Injectable({ providedIn: 'root' })
export class ProductService extends BaseService {

  constructor(http: HttpClient, httpErrorHandler: HttpErrorHandlerService) {
    super(http);
    this.handleError = httpErrorHandler.createHandleError('ProductService');
  }

  // To add Product.
  public addProduct(ProductModel: ProductModel): Observable<string> {
    let url: string = environment.TKServiceUrl + 'Product/add'
    return this.post<ProductModel>(url, ProductModel, null, "addProduct");
  }

  //get Product list 
  public getProductList(): Observable<Array<ProductModel>> {
    const url: string = environment.TKServiceUrl + 'Product/list';
    return this.get<Array<ProductModel>>(url, null, 'getProductList');
  }

//   //get Product detail by Product id 
//   public getProductDetail(id: number): Observable<ProductViewModel> {
//     const url: string = environment.FBCOServiceUrl + 'Product/ProductDetail/' + id;
//     return this.get<ProductViewModel>(url, null, 'getProductList');
//   }

//   // Update Product Details
//   public updateProductDetail(ProductModel: ProductViewModel): Observable<string> {
//     let url: string = environment.FBCOServiceUrl + 'Product/updateProduct'
//     return this.put(url, ProductModel, null, "updateProductDetail");
//   }

//   // Delete Product.
//   public deleteProduct(identificationModel: IdentificationModel): Observable<string> {

//     let url: string = environment.FBCOServiceUrl + 'Product/deleteProduct'
//     return this.put<IdentificationModel>(url, identificationModel, null, "deleted platfrom user");
//   }

//   //get Product lookup 
//   public getProductLookup(id): Observable<EmpTabModel> {
//     const url: string = environment.FBCOServiceUrl + 'Product/get/empname/' + id;
//     return this.get<EmpTabModel>(url, null, 'getProductLookup');
//   }

//   //get Product lookup 
//   public getProductNameByProductNumber(id: number): Observable<EmpTabModel> {
//     const url: string = environment.FBCOServiceUrl + 'Product/get/empnamebyProductnum/' + id;
//     return this.get<EmpTabModel>(url, null, 'getProductLookup');
//   }

//   //get Product hours 
//   public getProductHours(data): Observable<ProductHoursModel> {
//     const url: string = environment.FBCOServiceUrl + 'Product/getProducthours/' + data.empId + '/' + data.startDate + '/' + data.endDate
//     return this.get<ProductHoursModel>(url, null, 'getProductHours');
//   }


}