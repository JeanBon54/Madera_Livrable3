import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetWebService } from './../../../webServices/projet-webservice.service';
import { Observable } from 'rxjs';
import { Projet } from 'src/app/models/Projet';
import { Devis } from 'src/app/models/Devis';
import { Plan } from 'src/app/models/Plan';
import { DevisService } from 'src/app/WebServices/devis-webservice.service';
import { PlanService } from 'src/app/WebServices/plan-webservice.service';

@Component({
  selector: 'app-gestion-projet',
  templateUrl: './gestion-projet.page.html',
  styleUrls: ['./gestion-projet.page.scss', './../../../app.component.scss'],
})
export class GestionProjetPage implements OnInit {
  projet$: Observable<Projet>;
  plan$: Observable<Plan>;
  devis$: Observable<Devis>;
  projetId: number;

  constructor(private pService: ProjetWebService,private plService: PlanService, private dService: DevisService,private avRoute: ActivatedRoute) {
    const idParam = 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.projetId = this.avRoute.snapshot.params[idParam];
    }
  }

  ngOnInit() {
    this.loadProjet();
    this.loadDevis();
    this.loadPlans();
  }

  loadProjet() {
    this.projet$ = this.pService.getProjet(this.projetId);
  }

  loadDevis() {
    this.devis$ = this.dService.getDeviss();
  }

  loadPlans() {
    this.plan$ = this.plService.getPlans();
  }

}
