//===============================================================================
// © 2021.  All rights reserved.
// Original Author: Atul Badgujar
// Original Date: 26 Feb 2021
//==============================================================================


import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { CategoryModel } from "src/core/models/category.model";
import { environment } from "src/environments/environment";
import { BaseService } from "./base.service";
import { HttpErrorHandlerService } from "./http-error-handler.service";

@Injectable({ providedIn: 'root' })
export class CategoryService extends BaseService {

  constructor(http: HttpClient, httpErrorHandler: HttpErrorHandlerService) {
    super(http);
    this.handleError = httpErrorHandler.createHandleError('CategoryService');
  }

  // To add Category.
  public addCategory(CategoryModel: CategoryModel): Observable<string> {
    let url: string = environment.TKServiceUrl + 'Category/addCategory'
    return this.post<CategoryModel>(url, CategoryModel, null, "addCategory");
  }

//   //get Category list 
//   public getCategoryList(): Observable<Array<CategoryViewModel>> {
//     const url: string = environment.FBCOServiceUrl + 'Category/CategoryList';
//     return this.get<Array<CategoryViewModel>>(url, null, 'getCategoryList');
//   }

//   //get Category detail by Category id 
//   public getCategoryDetail(id: number): Observable<CategoryViewModel> {
//     const url: string = environment.FBCOServiceUrl + 'Category/CategoryDetail/' + id;
//     return this.get<CategoryViewModel>(url, null, 'getCategoryList');
//   }

//   // Update Category Details
//   public updateCategoryDetail(CategoryModel: CategoryViewModel): Observable<string> {
//     let url: string = environment.FBCOServiceUrl + 'Category/updateCategory'
//     return this.put(url, CategoryModel, null, "updateCategoryDetail");
//   }

//   // Delete Category.
//   public deleteCategory(identificationModel: IdentificationModel): Observable<string> {

//     let url: string = environment.FBCOServiceUrl + 'Category/deleteCategory'
//     return this.put<IdentificationModel>(url, identificationModel, null, "deleted platfrom user");
//   }

//   //get Category lookup 
//   public getCategoryLookup(id): Observable<EmpTabModel> {
//     const url: string = environment.FBCOServiceUrl + 'Category/get/empname/' + id;
//     return this.get<EmpTabModel>(url, null, 'getCategoryLookup');
//   }

//   //get Category lookup 
//   public getCategoryNameByCategoryNumber(id: number): Observable<EmpTabModel> {
//     const url: string = environment.FBCOServiceUrl + 'Category/get/empnamebyCategorynum/' + id;
//     return this.get<EmpTabModel>(url, null, 'getCategoryLookup');
//   }

//   //get Category hours 
//   public getCategoryHours(data): Observable<CategoryHoursModel> {
//     const url: string = environment.FBCOServiceUrl + 'Category/getCategoryhours/' + data.empId + '/' + data.startDate + '/' + data.endDate
//     return this.get<CategoryHoursModel>(url, null, 'getCategoryHours');
//   }


}