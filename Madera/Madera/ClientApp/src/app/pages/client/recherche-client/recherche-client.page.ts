import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ClientWebServiceService } from './../../../webServices/client-web-service.service'; 

@Component({
  selector: 'app-recherche-client',
  templateUrl: './recherche-client.page.html',
  styleUrls: ['./recherche-client.page.scss','./../../../app.component.scss'],
})
export class RechercheClientPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
