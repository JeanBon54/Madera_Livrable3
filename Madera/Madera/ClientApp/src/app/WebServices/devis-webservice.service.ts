import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Devis } from '../models/Devis';
import { ApiService } from 'src/Shared/api.service';
import { SearchProjet } from '../models/Search/SearchProjet';

@Injectable({
  providedIn: 'root'
})
export class DevisService extends ApiService {

  devisUrl = environment.appUrl + 'api/Devis/';

  constructor(private http: HttpClient) {
    super(http);
  }


  getDeviss(): Observable<Devis[]> {
    return this.get<Devis[]>(this.devisUrl, [])
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  getDevis(devisId: number): Observable<Devis> {
    return this.getById<Devis>(this.devisUrl, devisId.toString() )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  getDevisProjet(devisId: number): Observable<Devis[]> {
    return this.getById<Devis[]>(this.devisUrl + 'projet/', devisId.toString() )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getLignesDevis(planId: number): Observable<Devis[]> {
    return this.getById<Devis[]>(this.devisUrl + 'lignes/', planId.toString() )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  searchDevis<T>(search: string): Observable<T> {
    return this.post<T>(this.devisUrl + 'search', search)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  saveDevis(devis): Observable<Devis> {
    return this.post<Devis>(this.devisUrl, JSON.stringify(devis))
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  genPDF(devisId: number) {
    return this.getpdf(this.devisUrl + 'getpdf/', devisId.toString() ) 
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
