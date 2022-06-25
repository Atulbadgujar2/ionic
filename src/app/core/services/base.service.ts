//===============================================================================
// © 2021.  All rights reserved.
// Original Author: Atul Badgujar
// Original Date: 26 Feb 2021
//==============================================================================


import { Observable } from "rxjs";
import { HttpHeaders, HttpClient, } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { HandleError } from "./http-error-handler.service";


export abstract class BaseService {

    protected handleError: HandleError;

    constructor(private http: HttpClient) {
    }

    protected get<T>(url: string, httpOptions: any, actionMethodName: string): Observable<any> {
         
        httpOptions = this.setRequestOptions(httpOptions);
        url = this.appendTimeInUrl(url);

        return this.http.get<T>(url, httpOptions)
            .pipe(
                //     catchError(this.handleError(actionMethodName, []))
            );
    }

    protected getList<T>(url: string, httpOptions: any, actionMethodName: string): Observable<any> {
        httpOptions = this.setRequestOptions(httpOptions);
        url = this.appendTimeInUrl(url);

        return this.http.get<Array<T>>(url, httpOptions).pipe(
            // catchError(this.handleError(actionMethodName, []))
        );
    }


    // protected getAsync<T>(url: string, httpOptions: any, actionMethodName: string): Observable<any> {
    //     httpOptions = this.setRequestOptions(httpOptions);

    //     return this.http.get<Array<T>>(url, httpOptions).pipe(
    //         catchError(this.handleError(actionMethodName, []))
    //     );
    // }

    protected async getAsync<T>(url: string, httpOptions: any, actionMethodName: string) {
        httpOptions = this.setRequestOptions(httpOptions);
        url = this.appendTimeInUrl(url);

        return await this.http.get<T>(url, httpOptions).toPromise();
    }


    /**
     * Executes the post request with given uri parameters and header values.
     * @param url: The reqeust URI. 
     * @param data: The reqeust object. 
     * @param args: The request argument. 
     */
    protected post<T>(url: string, data: T, httpOptions: any, actionMethodName: string): Observable<any> {
        httpOptions = this.setRequestOptions(httpOptions);
        url = this.appendTimeInUrl(url);

        return this.http.post<T>(url, data, httpOptions);//.pipe(
        // catchError(this.handleError(actionMethodName, []))
        // );
    }

    /**
     * Executes the post request with given uri parameters and header values.
     * @param url: The reqeust URI. 
     * @param data: The reqeust object. 
     * @param args: The request argument. 
     */
    protected postFile(url: string, data: any, httpOptions: any, actionMethodName: string): Observable<any> {
        httpOptions = this.setRequestOptions(httpOptions);
        url = this.appendTimeInUrl(url);

        return this.http.post(url, data, httpOptions).pipe(
            //catchError(this.handleError(actionMethodName, []))
        );
    }

    /**
     * Executes the put request with given uri parameters and header values.
     * @param url: The reqeust URI.
     * @param data: The reqesut object.
     * @param args: The reqesut argument.
     */
    protected put<T>(url: string, data: any, httpOptions: any, actionMethodName: string): Observable<any> {
        httpOptions = this.setRequestOptions(httpOptions);
        url = this.appendTimeInUrl(url);

        return this.http.put<T>(url, data, httpOptions).pipe(
            //catchError(this.handleError(actionMethodName, []))
        );
    }

    /**
    * Executes the put request with given uri parameters and header values.
     * @param url: The reqeust URI.
     * @param data: The reqesut object.
     * @param args: The reqesut argument.
     */
    protected delete(url: string, httpOptions: any, actionMethodName: string): Observable<any> {
        httpOptions = this.setRequestOptions(httpOptions);

        url = this.appendTimeInUrl(url);

        return this.http.delete(url, httpOptions).pipe(
            // catchError(this.handleError(actionMethodName, []))
        );
    }


    private setRequestOptions(httpOptions: any, includeToken = true): any {

        // let headers = new Headers();
        // headers.append('Accept', 'application/json');
        // headers.append('Content-Type', 'application/json');
        // httpOptions = {
        //     headers: headers
        // };

        // // If reqeust option is null
        // if (httpOptions == null) {
        //     httpOptions = {
        //     };
        // }

        // // If reqeust header is null
        // let headers = httpOptions.headers;
        // if (headers == null || headers == undefined) {
        //     httpOptions.headers = {};
        // }

        // // // // Add default header 
        // // // var headers = {};        
        // // // // let headers: HttpHeaders = new HttpHeaders();
        // // // headers['Content-Type'] = 'application/json';
        // // // headers['Accept']= 'application/json';
        // // // if (includeToken) {
        // // //     let accessToken = this.authService.getAccessToken();
        // // //     headers['Authorization'] = `Bearer ${accessToken}`;
        // // // }
        // // let accessToken = this.authService.getAccessToken();
        // // httpOptions.headers = new HttpHeaders({
        // //     'Content-Type': 'application/json',
        // //     'Accept': 'application/json',
        // //     'Authorization': `Bearer ${accessToken}`
        // // });

        // // let accessToken = this.authService.getAccessToken();

        // headers.push('Content-Type', 'application/json');
        // httpOptions = {
        //     headers: headers
        // };
        // // httpOptions.headers.append('Accept', 'application/json')
        // // httpOptions.headers.append('MyValue', 'Test');
        if (httpOptions == null) {
            httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    // 'Authorization': `Bearer ${accessToken}`
                })
            };
        }
        return httpOptions;
    }

    private appendTimeInUrl(url: string): string {
        // if (url.indexOf('?') > -1) {
        //     return url += '&dt=' + DateTimeHelper.getCurrentUTCDateTimeInUnixMS().toString();
        // }
        // else {
        //     return url += '?dt=' + DateTimeHelper.getCurrentUTCDateTimeInUnixMS().toString();
        // }
        return url;
    }

    getDownload(url: string, actionMethodName: string): Observable<Blob> {
        return this.http.get<Blob>(url, {responseType: 'blob' as 'json'})
        .pipe(map((res: any) => {
            return new Blob([res], { 
                // type: 'application/octet-stream'
                type: 'application/pdf' 
              })
        }));
    }

    /**
     * Executes the post request with given uri parameters and header values.
     * @param url: The reqeust URI. 
     * @param data: The reqeust object. 
     * @param args: The request argument. 
     */
    protected putFile(url: string, data: any, httpOptions: any, actionMethodName: string): Observable<any> {
        httpOptions = this.setRequestOptions(httpOptions);
        url = this.appendTimeInUrl(url);

        return this.http.put(url, data, httpOptions).pipe(
            //catchError(this.handleError(actionMethodName, []))
        );
    }
    
}