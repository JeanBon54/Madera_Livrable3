import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Projet, ProjetCommercial } from '../models/Projet';
import { ApiService } from 'src/Shared/api.service';
import { SearchProjet } from '../models/Search/SearchProjet';

@Injectable({
  providedIn: 'root'
})
export class ProjetWebService extends ApiService {

  projectUrl = environment.appUrl + 'api/Projets/';

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
    return this.getById<Projet>(this.projectUrl, projetId.toString() )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  searchProjet<T>(search: string): Observable<T> {
    return this.post<T>(this.projectUrl + 'search', search)
      .pipe(
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

  editRemarque(id: number, remarque: string) {
    return this.post<Projet>(this.projectUrl + 'remarque', JSON.stringify({id, remarque}))
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
