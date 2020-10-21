import { Component, OnInit } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { DevisWebServiceService } from './../../../webServices/devis-web-service.service'; 

@Component({
  selector: 'app-recherche-devis',
  templateUrl: './recherche-devis.page.html',
  styleUrls: ['./recherche-devis.page.scss','./../../../app.component.scss'],
})
export class RechercheDevisPage implements OnInit {

  public devis = [];

  constructor(private ServiceService: DevisWebServiceService) { }
  data: any;

  ngOnInit(): void {
    this.getdata();

  }
  getdata() {
    this.ServiceService.getData().subscribe((data: any[]) => {
      this.devis = data;
    })
  }

}
