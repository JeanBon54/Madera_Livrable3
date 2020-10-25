import { Component, Inject, OnInit } from '@angular/core';


import { ProjetWebService } from './../../../webServices/projet-webservice.service';
import { Observable } from 'rxjs';
import { Projet } from 'src/app/models/Projet';

@Component({
  selector: 'app-recherche-projet',
  templateUrl: './recherche-projet.page.html',
  styleUrls: ['./recherche-projet.page.scss', './../../../app.component.scss'],
})


export class RechercheProjetPage implements OnInit {

  projet$: Observable<Projet[]>;

  constructor(private projetService: ProjetWebService) {
  }

  ngOnInit() {
    this.loadProjet();
  }

  loadProjet() {
    this.projet$ = this.projetService.getProjet();
  }

}





