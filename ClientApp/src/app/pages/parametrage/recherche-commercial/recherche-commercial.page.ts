import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommercialWebServiceService } from './../../../webServices/commercial-web-service.service';  

@Component({
  selector: 'app-recherche-commercial',
  templateUrl: './recherche-commercial.page.html',
  styleUrls: ['./recherche-commercial.page.scss', './../../../app.component.scss'],
})
export class RechercheCommercialPage implements OnInit {

  public commercial = [];

  constructor(private ServiceService: CommercialWebServiceService) { }  
  data: any;

  ngOnInit(): void {
    this.getdata();

  }
  getdata() {
    this.ServiceService.getData().subscribe((data: any[]) => {
      this.commercial = data;
    })
  }  

}
interface Commercial {
  ID_COMMERCIAL: number;
  NOM_COMMERCIAL: string;
  PRENOM_COMMERCIAL: string;
  EMAIL_COMMERCIAL: string;
  MDP_COMMERCIAL: string;

}
