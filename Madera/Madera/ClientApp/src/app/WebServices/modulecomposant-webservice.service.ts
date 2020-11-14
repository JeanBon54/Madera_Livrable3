import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ModuleComposant } from '../models/ModuleComposant';
import { ApiService } from 'src/Shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleComposantService extends ApiService {

  moduleComposantUrl = environment.appUrl + 'api/ModuleComposants/';

  constructor(private http: HttpClient) {
    super(http);
  }


  getModuleComposants(): Observable<ModuleComposant[]> {
    return this.get<ModuleComposant[]>(this.moduleComposantUrl, [])
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  getModuleComposant(ModuleId: number): Observable<ModuleComposant> {
    return this.getById<ModuleComposant>(this.moduleComposantUrl, ModuleId.toString() )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  savemoduleComposant(modulecomposant): Observable<ModuleComposant> {
    return this.post<ModuleComposant>(this.moduleComposantUrl, JSON.stringify(modulecomposant))
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
