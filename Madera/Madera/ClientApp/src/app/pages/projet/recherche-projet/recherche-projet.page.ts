import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjetWebService } from './../../../webServices/projet-webservice.service';
import { Observable } from 'rxjs';
import { Projet } from '../models/Projet';


@Component({
  selector: 'app-recherche-projet',
  templateUrl: './recherche-projet.page.html',
  styleUrls: ['./recherche-projet.page.scss', './../../../app.component.scss'],
})


export class RechercheProjetPage implements OnInit {

  projets: Observable<Projet[]>;

  constructor(private projetService: ProjetWebServiceService) { 
  data: any;

  }

  ngOnInit(): void {
    this.getProjets();

  }
  getProjets() {
    this.projets = this.ProjetWebService.getProjets();
  }
}





