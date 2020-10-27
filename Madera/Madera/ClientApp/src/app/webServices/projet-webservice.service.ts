import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Projet } from '../models/Projet';
import { ApiService } from 'src/Shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProjetWebService extends ApiService {

  projectUrl = environment.appUrl + 'api/Projet/';

  constructor(private http: HttpClient) {
    super(http);
  }


  getProjets(): Observable<Projet[]> {
    return this.get<Projet[]>(this.projectUrl, [])
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  getProjet(projetId: number): Observable<Projet> {
    return this.get<Projet>(this.projectUrl, [{key: 'id', value: projetId.toString()}] )
      .pipe(
        tap(resp => console.log(resp)),
        retry(1),
        catchError(this.errorHandler)
      );
  }


  saveProjet(projet): Observable<Projet> {
    return this.post<Projet>(this.projectUrl, JSON.stringify(projet))
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
