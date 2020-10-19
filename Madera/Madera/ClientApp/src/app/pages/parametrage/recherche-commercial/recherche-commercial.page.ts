import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from './../../service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recherche-commercial',
  templateUrl: './recherche-commercial.page.html',
  styleUrls: ['./recherche-commercial.page.scss', './../../app.component.scss'],
})
export class RechercheCommercialPage implements OnInit {

  public commerciaux: Commercial[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<any>(baseUrl + 'commercial').subscribe(result => {
      this.commerciaux = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }



}
interface Commercial {
  ID_COMMERCIAL: number;
  NOM_COMMERCIAL: string;
  PRENOM_COMMERCIAL: string;
  EMAIL_COMMERCIAL: string;
  MDP_COMMERCIAL: string;

}