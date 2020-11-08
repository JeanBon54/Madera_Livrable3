import {ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommercialWebService } from './../../../webServices/commercial-web-service.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Commercial,SearchingCommercial } from 'src/app/models/Commercial';
import { SearchCommercial } from '../../../models/Search/SearchCommercial';

@Component({
  selector: 'app-recherche-commercial',
  templateUrl: './recherche-commercial.page.html',
  styleUrls: ['./recherche-commercial.page.scss', './../../../app.component.scss'],
})

export class RechercheCommercialPage implements OnInit {

  commercial$: Observable<SearchingCommercial[]>;
  form: FormGroup;

  constructor(private commercialService: CommercialWebService, 
    private cd: ChangeDetectorRef,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        reference: ['', []]
      }
    )

    this.loadCommercial();
  }

  loadCommercial() {
    this.commercial$ = this.commercialService.getCommercial();
  }

  searchCommercial() {
    const search: SearchCommercial = {
      NomCommercial: this.form.get("reference").value
    };

    const searchString = JSON.stringify(search);
    this.commercial$ = this.commercialService.searchCommercial<SearchingCommercial[]>(searchString);

  }


}


