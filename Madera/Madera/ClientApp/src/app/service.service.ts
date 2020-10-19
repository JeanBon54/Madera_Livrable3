import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }  
  httpOptions = {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  }    
  getData(){  
       
    return this.http.get('/api/Commercial');  //https://localhost:44352/ webapi host url  
  }  
  
}
