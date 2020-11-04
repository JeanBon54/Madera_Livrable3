import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Commercial } from '../models/Commercial';
import { ApiService } from 'src/Shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class CommercialWebService extends ApiService {


  commercialUrl = environment.appUrl + 'api/Commercials/';

  constructor(private http: HttpClient) {
    super(http);
  }

  // GET POUR PRENDRE LES INFOS
  getCommercial(): Observable<Commercial[]> {
    return this.get<Commercial[]>(this.commercialUrl, [])
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }


  getCommercialID(commercialId: number): Observable<Commercial> {
    return this.get<Commercial>(this.commercialUrl, [{key: 'id', value: commercialId.toString()}] )
      .pipe(
        tap(resp => console.log(resp)),
        retry(1),
        catchError(this.errorHandler)
      );
  }


  // POST  --> AJOUT
  saveCommercial(commercial): Observable<Commercial> {
    return this.post<Commercial>(this.commercialUrl, JSON.stringify(commercial))
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

// GESTION DES ERREURS
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
