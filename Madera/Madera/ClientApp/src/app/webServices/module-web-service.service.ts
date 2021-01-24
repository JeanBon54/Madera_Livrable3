import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Module ,SearchingModule} from '../models/Module';
import { ApiService } from 'src/Shared/api.service';
import { ModulePlans } from '../models/ModulePlans';

@Injectable({
  providedIn: 'root'
})
export class ModuleService extends ApiService {

  moduleComposantUrl = environment.appUrl + 'api/Modules/';
  modulePlansUrl = environment.appUrl + 'api/ModulePlans/';

  constructor(private http: HttpClient) {
    super(http);
  }


  getModules(): Observable<SearchingModule[]> {
    return this.get<SearchingModule[]>(this.moduleComposantUrl, [])
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  getLignesModulePlans(planId: number): Observable<ModulePlans[]> {
    return this.getById<ModulePlans[]>(this.modulePlansUrl + 'lignes/', planId.toString() )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getModulePlans(planId: number): Observable<ModulePlans[]> {
    return this.getById<ModulePlans[]>(this.modulePlansUrl, planId.toString() )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getModule(ModuleId: number): Observable<SearchingModule> {
    return this.getById<SearchingModule>(this.moduleComposantUrl, ModuleId.toString() )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  savemodule(module): Observable<SearchingModule> {
    return this.post<SearchingModule>(this.moduleComposantUrl, JSON.stringify(module))
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  searchModule<T>(search: string): Observable<T> {
    return this.post<T>(this.moduleComposantUrl + 'search', search)
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
