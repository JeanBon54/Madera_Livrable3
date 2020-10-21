import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FamilleComposantWebServiceService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getData() {

    return this.http.get('/familleComposant');
  }  

}
