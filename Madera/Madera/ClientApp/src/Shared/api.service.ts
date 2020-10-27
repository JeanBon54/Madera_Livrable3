import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public apiUrl = environment.appUrl;

  constructor(protected httpClient: HttpClient) {}

  public post<T>(url: string, body: string): Observable<T> {
    return this.httpClient.post<T>(url, body, { headers: this.getHeaders() } );
  }

  public get<T>(url: string, parameters: { key: string; value: string }[] ): Observable<T> {
    let httpParameters: HttpParams;
    if (parameters != null) {
      httpParameters = parameters.reduce((params, p) => params.set(p.key, p.value), new HttpParams());
    }

    return this.httpClient.get<T>(url, { headers: this.getHeaders(), params: httpParameters });
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    // headers = headers.set('Access-Control-Allow-Origin', window.location.origin);
    headers = headers.set('Content-Type', 'application/json');
    // if (localStorage.getItem('token') !== null) {
    //   headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    // }
    return headers;
  }

}
