import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Composant,SearchingComposant } from '../models/Composants';
import { ApiService } from 'src/Shared/api.service';
import { SearchComposant } from '../models/Search/SearchComposant';

@Injectable({
  providedIn: 'root'
})
export class ComposantWebServiceService extends ApiService {

  composantUrl = environment.appUrl + 'api/Composant/';

  constructor(private http: HttpClient) {
    super(http);
  }

  // GET POUR PRENDRE LES INFOS
  getComposant(): Observable<SearchingComposant[]> {
    return this.get<SearchingComposant[]>(this.composantUrl, [])
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }


  getComposantID(composantId: number): Observable<SearchingComposant> {
    return this.get<SearchingComposant>(this.composantUrl, [{key: 'id', value: composantId.toString()}] )
      .pipe(
        tap(resp => console.log(resp)),
        retry(1),
        catchError(this.errorHandler)
      );
  }

  searchComposant<T>(search: string): Observable<T> {
    return this.post<T>(this.composantUrl + 'search', search)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }


  // POST  --> AJOUT
  saveComposant(composant): Observable<Composant> {
    return this.post<Composant>(this.composantUrl, JSON.stringify(composant))
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