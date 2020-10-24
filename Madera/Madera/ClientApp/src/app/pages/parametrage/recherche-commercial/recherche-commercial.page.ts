import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CommercialWebService } from './../../../webServices/commercial-web-service.service';  
import { Observable } from 'rxjs';
import { Commercial } from 'src/app/models/Commercial';

@Component({
  selector: 'app-recherche-commercial',
  templateUrl: './recherche-commercial.page.html',
  styleUrls: ['./recherche-commercial.page.scss', './../../../app.component.scss'],
})
export class RechercheCommercialPage implements OnInit {

  commercial$: Observable<Commercial[]>;

  constructor(private commercialService: CommercialWebService) {
  }

  ngOnInit() {
    this.loadCommercial();
  }

  loadCommercial() {
    this.commercial$ = this.commercialService.getCommercial();
  }
}


