import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

import {AutoCompleteService} from 'ionic4-auto-complete';
import { ApiService } from 'src/Shared/api.service';

@Injectable()
export class AutocompleteClientService  extends ApiService implements AutoCompleteService {
  formValueAttribute = 'id';
    
  clientUrl = environment.appUrl + 'api/Clients/autocomplete/';
  private clients:any[] = [];

  constructor(private http:HttpClient) {
    super(http);
  }

  getResults(keyword:string) {
    if (!keyword) { return false; }

    const search: any = {
      NomClient: keyword
    };


    return this.post<any>(this.clientUrl, search).pipe(map(
       (result: any[]) => {
          return result.filter(
             (item) => {
                return item.labelAttribute.toLowerCase().startsWith(
                   keyword.toLowerCase()
                );
             }
          );
       }
    ));
 }

 getItemLabel(item: any) {
  return item.labelAttribute
}


}