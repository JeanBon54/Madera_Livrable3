import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'src/app/webServices/projet-webservice.service';
import { Observable } from 'rxjs';
import { Projet } from 'src/app/models/Projet';


@Component({
  selector: 'app-recherche-projet',
  templateUrl: './recherche-projet.page.html',
  styleUrls: ['./recherche-projet.page.scss', './../../../app.component.scss'],
})


export class RechercheProjetPage implements OnInit {

  projets$: Observable<Projet[]>;
  data: any;

  constructor(private pService: ProjetService) {

  }

  ngOnInit(): void {
    this.getProjets();

  }


  getProjets() {
    this.pService.GetProjets().subscribe((data: Projet[]) => {
      this.projets$ = data;
    })
  }

}





