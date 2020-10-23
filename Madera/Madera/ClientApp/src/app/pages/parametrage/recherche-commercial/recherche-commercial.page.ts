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
  CommerForm: FormGroup;
  submitted = false;
  EventValue: any = "Save";  


  ngOnInit(): void {
    this.getdata();

    this.CommerForm = new FormGroup({
      ID_COMMERCIAL: new FormControl(null),
      NOM_COMMERCIAL: new FormControl("", [Validators.required]),
      PRENOM_COMMERCIAL: new FormControl("", [Validators.required]),
      EMAIL_COMMERCIAL: new FormControl("", [Validators.required]),
      DATE_CREATION_COMMERCIAL: new FormControl("", [Validators.required]),
      REMARQUE_COMMERCIAL: new FormControl("", [Validators.required])
    })
  } 
  getdata() {
    this.ServiceService.getData().subscribe((data: any[]) => {
      this.commercial = data;
    })
  }
}


