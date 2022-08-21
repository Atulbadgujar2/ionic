//===============================================================================
// © 2021.  All rights reserved.
// Original Author: Atul Badgujar
// Original Date: 26 Feb 2021
//==============================================================================


import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

import { environment } from "src/environments/environment";
import { CustomerModel } from "../models/customer/customer.model";
import { IdentificationModel } from "../models/identification.model";
import { BaseService } from "./base.service";
import { HttpErrorHandlerService } from "./http-error-handler.service";

@Injectable({ providedIn: 'root' })
export class CustomerService extends BaseService {

  constructor(http: HttpClient, httpErrorHandler: HttpErrorHandlerService) {
    super(http);
    this.handleError = httpErrorHandler.createHandleError('CustomerService');
  }

  //get Customer list 
  public getCustomerList(): Observable<Array<CustomerModel>> {
    const url: string = environment.TKServiceUrl + 'Customer/list';
    return this.get<Array<CustomerModel>>(url, null, 'getCustomerList');
  }



}