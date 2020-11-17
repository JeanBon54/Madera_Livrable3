import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';



import { ProjetWebService } from './../../../webServices/projet-webservice.service';
import { Projet } from 'src/app/models/Projet';
import { Devis } from 'src/app/models/Devis';
import { Plan } from 'src/app/models/Plan';
import { DevisService } from './../../../WebServices/devis-webservice.service';
import { PlanService } from './../../../WebServices/plan-webservice.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-gestion-projet',
  templateUrl: './gestion-projet.page.html',
  styleUrls: ['./gestion-projet.page.scss', './../../../app.component.scss'],
})
export class GestionProjetPage implements OnInit, OnDestroy {
  subscription: Subscription[] = [];
  projet$ = new Projet();
  plan$: Observable<Plan[]>;
  devis$: Observable<Devis[]>;
  projetId: number;
  remarque = '';

  constructor(private pService: ProjetWebService,
    private plService: PlanService, 
    private dService: DevisService,
    private avRoute: ActivatedRoute,private formBuilder: FormBuilder) {
    const idParam = 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.projetId = this.avRoute.snapshot.params[idParam];
    }
  }
  ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe());
  }

  ngOnInit() {
    this.loadProjet();
    this.loadDevis();
    this.loadPlans();
  }

  loadProjet() {
    this.subscription.push(
      this.pService.getProjet(this.projetId).pipe(
        tap(projet => {
          this.projet$ = projet;
          this.remarque = this.projet$.libelleRemarque;
        })
      ).subscribe()
    ) 
  }

  loadDevis() {
    this.devis$ = this.dService.getDeviss();
  }

  loadPlans() {
    this.plan$ = this.plService.getPlans();
  }
  
  back() {
    window.history.go(-1);
  }

  save() {
    this.subscription.push(
      this.pService.editRemarque(this.projetId, this.remarque).subscribe()
    )
  }
}
