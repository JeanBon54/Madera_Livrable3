import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Couverture} from '../models/Couverture';
import { ApiService } from 'src/Shared/api.service';


@Injectable({
  providedIn: 'root'
})
export class CouvertureWebServiceService  extends ApiService { 


  moduleComposantUrl = environment.appUrl + 'api/Couvertures/';

  constructor(private http: HttpClient) {
    super(http);
  }


  getCouverture(): Observable<Couverture[]> {
    return this.get<Couverture[]>(this.moduleComposantUrl, [])
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
