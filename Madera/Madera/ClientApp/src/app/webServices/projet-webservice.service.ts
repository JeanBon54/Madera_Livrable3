import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Projet } from '../models/Projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetWebService {


  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/Projet/';
  }


  getProjets(): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.myAppUrl + this.myApiUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  getProjet(projetId: number): Observable<Projet> {
    return this.http.get<Projet>(this.myAppUrl + this.myApiUrl + projetId)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }


  saveProjet(projet): Observable<Projet> {
    return this.http.post<Projet>(this.myAppUrl + this.myApiUrl, JSON.stringify(projet), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }


  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
