import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { familleComposant,SearchingFamilleComposant } from '../models/FamilleComposant';
import { ApiService } from 'src/Shared/api.service';
import { SearchFamilleComposant } from '../models/Search/SearchFamilleComposant';

@Injectable({
  providedIn: 'root'
})
export class FamilleComposantWebServiceService extends ApiService {

  familleComposantUrl = environment.appUrl + 'api/familleComposants/';

  constructor(private http: HttpClient) {
    super(http);
  }

  // GET POUR PRENDRE LES INFOS
  getFamComposant(): Observable<SearchingFamilleComposant[]> {
    return this.get<SearchingFamilleComposant[]>(this.familleComposantUrl, [])
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }


  getFamComposantID(familleComposantId: number): Observable<SearchingFamilleComposant> {
    return this.get<SearchingFamilleComposant>(this.familleComposantUrl, [{key: 'id', value: familleComposantId.toString()}] )
      .pipe(
        tap(resp => console.log(resp)),
        retry(1),
        catchError(this.errorHandler)
      );
  }

  searchFamComposant<T>(search: string): Observable<T> {
    return this.post<T>(this.familleComposantUrl + 'search', search)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }


  // POST  --> AJOUT
  saveFamComposant(familleComposant): Observable<familleComposant> {
    return this.post<familleComposant>(this.familleComposantUrl, JSON.stringify(familleComposant))
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