import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ComposantWebServiceService } from './../../../webServices/composant-web-service.service';  
@Component({
  selector: 'app-recherche-composant',
  templateUrl: './recherche-composant.page.html',
  styleUrls: ['./recherche-composant.page.scss','./../../../app.component.scss'],
})
export class RechercheComposantPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }



}
