import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { coupePrincipale} from 'src/app/models/coupePrincipale';
import { ApiService } from 'src/Shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class CoupePrincipaleWebServiceService extends ApiService { 


  coupePrincipalUrl = environment.appUrl + 'api/coupePrincipales/';

  constructor(private http: HttpClient) {
    super(http);
  }


  getCoupePrincipal(): Observable<coupePrincipale[]> {
    return this.get<coupePrincipale[]>(this.coupePrincipalUrl, [])
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
