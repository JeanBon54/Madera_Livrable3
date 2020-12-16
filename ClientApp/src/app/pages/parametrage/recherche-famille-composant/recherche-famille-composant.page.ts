import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FamilleComposantWebServiceService } from './../../../webServices/famille-composant-web-service.service'; 

@Component({
  selector: 'app-recherche-famille-composant',
  templateUrl: './recherche-famille-composant.page.html',
  styleUrls: ['./recherche-famille-composant.page.scss','./../../../app.component.scss'],
})
export class RechercheFamilleComposantPage implements OnInit {

  public familleComposant = [];

  constructor(private ServiceService: FamilleComposantWebServiceService) { }
  data: any;

  ngOnInit(): void {
    this.getdata();

  }
  getdata() {
    this.ServiceService.getData().subscribe((data: any[]) => {
      this.familleComposant = data;
    })
  }

}
