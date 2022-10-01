import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FdcUserService {

  constructor(private http : HttpClient) { }


  getFdcUser(url) {

    return  this.http.get("http://localhost:8080"+url);

  }

  postFdcData(url,capacityForm) {

    return  this.http.post("http://localhost:8080"+url,capacityForm);

  }
}
