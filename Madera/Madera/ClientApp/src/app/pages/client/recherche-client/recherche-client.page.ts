import { ChangeDetectorRef,Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ClientWebServiceService } from './../../../webServices/client-web-service.service'; 
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client,SearchingClient } from 'src/app/models/Client';
import { SearchClient } from '../../../models/Search/SearchClient';

@Component({
  selector: 'app-recherche-client',
  templateUrl: './recherche-client.page.html',
  styleUrls: ['./recherche-client.page.scss','./../../../app.component.scss'],
})
export class RechercheClientPage implements OnInit {


  client$: Observable<SearchingClient[]>;
  form: FormGroup;

  constructor(private clientService: ClientWebServiceService, 
    private cd: ChangeDetectorRef,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        reference: ['', []]
      }
    )

    this.loadClient();
  }

  loadClient() {
    this.client$ = this.clientService.getClient();
  }

  searchClient() {
    const search: SearchClient = {
      NomClient: this.form.get("reference").value
    };

    const searchString = JSON.stringify(search);
    this.client$ = this.clientService.searchClient<SearchingClient[]>(searchString);

  }


}

