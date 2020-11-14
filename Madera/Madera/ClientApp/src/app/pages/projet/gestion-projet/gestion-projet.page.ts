import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetWebService } from './../../../webServices/projet-webservice.service';
import { Observable } from 'rxjs';
import { Projet } from 'src/app/models/Projet';

@Component({
  selector: 'app-gestion-projet',
  templateUrl: './gestion-projet.page.html',
  styleUrls: ['./gestion-projet.page.scss', './../../../app.component.scss'],
})
export class GestionProjetPage implements OnInit {
  projet$: Observable<Projet>;
  projetId: number;

  constructor(private pService: ProjetWebService, private avRoute: ActivatedRoute) {
    const idParam = 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.projetId = this.avRoute.snapshot.params[idParam];
    }
  }

  ngOnInit() {
    this.loadProjet();
  }

  loadProjet() {
    this.projet$ = this.pService.getProjet(this.projetId);
  }

}
