import { Injectable } from '@angular/core';
import { Constants } from '../models/constant';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(private http: HttpClient) { }

  async get(filter) {
    const url = Constants.BASE_API_URL;
    let asyncResult;
    if(filter._year && filter._launch && filter._landing) {
      let newUrl = url + '&launch_success=' + filter._launch + '&land_success=' + filter._landing + '&launch_year=' + filter._year;
      asyncResult = await this.http.get<any>(newUrl,{responseType: 'json'}).toPromise();
      return asyncResult;
    } else if(filter._year && filter._launch) {
      let newUrl = url + '&launch_success=' + filter._launch + '&launch_year=' + filter._year;
      asyncResult = await this.http.get<any>(newUrl,{responseType: 'json'}).toPromise();
      return asyncResult;
    } else if(filter._year && filter._landing) {
      let newUrl = url + '&land_success=' + filter._landing + '&launch_year=' + filter._year;
      asyncResult = await this.http.get<any>(newUrl,{responseType: 'json'}).toPromise();
      return asyncResult;
    } else if(filter._launch && filter._landing) {
      let newUrl = url + '&launch_success=' + filter._launch + '&land_success=' + filter._landing;
      asyncResult = await this.http.get<any>(newUrl,{responseType: 'json'}).toPromise();
      return asyncResult;
    } else if(filter._year) {
      let newUrl = url + '&launch_year=' + filter._year;
      asyncResult = await this.http.get<any>(newUrl,{responseType: 'json'}).toPromise();
      return asyncResult;
    } else if(filter._launch) {
      let newUrl = url + '&launch_success=' + filter._launch;
      asyncResult = await this.http.get<any>(newUrl,{responseType: 'json'}).toPromise();
      return asyncResult;
    } else if(filter._landing) {
      let newUrl = url + '&land_success=' + filter._landing;
      asyncResult = await this.http.get<any>(newUrl,{responseType: 'json'}).toPromise();
      return asyncResult;
     } else {
      asyncResult = await this.http.get<any>(url,{responseType:'json'}).toPromise();
      return asyncResult;
    }
  }
}
