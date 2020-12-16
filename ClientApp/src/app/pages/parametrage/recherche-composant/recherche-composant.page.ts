import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ComposantWebServiceService } from './../../../webServices/composant-web-service.service';  
@Component({
  selector: 'app-recherche-composant',
  templateUrl: './recherche-composant.page.html',
  styleUrls: ['./recherche-composant.page.scss','./../../../app.component.scss'],
})
export class RechercheComposantPage implements OnInit {

  public composant = [];

  constructor(private ServiceService: ComposantWebServiceService) { }
  data: any;

  ngOnInit(): void {
    this.getdata();

  }
  getdata() {
    this.ServiceService.getData().subscribe((data: any[]) => {
      this.composant = data;
    })
  }




}
