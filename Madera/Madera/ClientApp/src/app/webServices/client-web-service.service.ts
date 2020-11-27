import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Client,SearchingClient } from '../models/Client';
import { ApiService } from 'src/Shared/api.service';
import { SearchClient } from '../models/Search/SearchClient';

@Injectable({
  providedIn: 'root'
})
export class ClientWebServiceService extends ApiService {


  clientUrl = environment.appUrl + 'api/Clients/';

  constructor(private http: HttpClient) {
    super(http);
  }

  // GET POUR PRENDRE LES INFOS
  getClient(): Observable<SearchingClient[]> {
    return this.get<SearchingClient[]>(this.clientUrl, [])
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }


  getClientID(clientId: number): Observable<Client> {
    return this.getById<Client>(this.clientUrl, clientId.toString() )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  searchClient<T>(search: string): Observable<T> {
    return this.post<T>(this.clientUrl + 'search', search)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }


  // POST  --> AJOUT
  saveClient(client): Observable<Client> {
    return this.post<Client>(this.clientUrl, JSON.stringify(client))
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