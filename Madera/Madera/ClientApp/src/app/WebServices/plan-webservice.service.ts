import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Plan } from 'src/app/models/Plan';
import { ApiService } from 'src/Shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class PlanService extends ApiService {

  planUrl = environment.appUrl + 'api/Plans/';
  planNewUrl = environment.appUrl + 'api/Plans/save/';
  projetPlanNewUrl = environment.appUrl + 'api/ProjetPlans/save';

  constructor(private http: HttpClient) {
    super(http);
  }


  getPlans(): Observable<Plan[]> {
    return this.get<Plan[]>(this.planUrl, [])
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  getPlan(planId: number): Observable<Plan> {
    return this.getById<Plan>(this.planUrl, planId.toString() )
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  searchPlans<T>(search: string): Observable<T> {
    return this.post<T>(this.planUrl + 'search', search)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  saveplan(plan): Observable<Plan> {
    return this.post<Plan>(this.planUrl, JSON.stringify(plan))
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  postplan(plan): Observable<Plan> {
    return this.post<Plan>(this.planNewUrl, JSON.stringify(plan))
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  postProjetPlan(plan): Observable<Plan> {
    return this.post<Plan>(this.projetPlanNewUrl, JSON.stringify(plan))
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
