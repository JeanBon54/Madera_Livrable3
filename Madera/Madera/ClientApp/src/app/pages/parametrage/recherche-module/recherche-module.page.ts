import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ModuleWebServiceService } from './../../../webServices/module-web-service.service';  
@Component({
  selector: 'app-recherche-module',
  templateUrl: './recherche-module.page.html',
  styleUrls: ['./recherche-module.page.scss','./../../../app.component.scss'],
})
export class RechercheModulePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
