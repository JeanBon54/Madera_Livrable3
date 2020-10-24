import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ProjetWebService } from './../../../webServices/projet-webservice.service';
import { Observable } from 'rxjs';
import { Projet } from 'src/app/models/Projet';


@Component({
  selector: 'app-recherche-projet',
  templateUrl: './recherche-projet.page.html',
  styleUrls: ['./recherche-projet.page.scss', './../../../app.component.scss'],
})


export class RechercheProjetPage implements OnInit {

  projets$: Observable<Projet[]>;

  constructor(private pService: ProjetWebService) {
  }

  ngOnInit() {
    this.loadProjets();
  }

   loadProjets() {
     this.projets$ = this.pService.getProjets();
     console.log("dzzdz");
     console.log(this.projets$);
  }

}





