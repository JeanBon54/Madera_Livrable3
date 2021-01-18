import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { DevisService } from './../../../WebServices/devis-webservice.service';
import { ProjetWebService } from './../../../webServices/projet-webservice.service';
import { ClientWebServiceService } from './../../../webServices/client-web-service.service';
import { Projet } from './../../../models/Projet';
import { tap } from 'rxjs/operators';
import { Devis } from './../../../models/Devis';
import { Client } from '../../../models/Client';
import { Plan } from '../../../models/Plan';
import { PlanService } from 'src/app/WebServices/plan-webservice.service';


@Component({
  selector: 'app-gestion-projet',
  templateUrl: './gestion-projet.page.html',
  styleUrls: ['./gestion-projet.page.scss', './../../../app.component.scss'],
})
export class GestionProjetPage implements OnInit, OnDestroy {
  subscription: Subscription[] = [];
  projet$ = new Projet();
  client$: Observable<Client>;
  //projet$: Observable<Projet>;
  devis$: Observable<Devis[]>;
  plans$: Observable<Plan[]>;
  projetId: number;
  remarque = '';

  constructor(
    private pService: ProjetWebService,
    private dService: DevisService,
    private cService: ClientWebServiceService,
    private avRoute: ActivatedRoute,  
    private formBuilder: FormBuilder,
    private plService: PlanService) {
    const idParam = 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.projetId = this.avRoute.snapshot.params[idParam];
    }
  }
  ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe());
  }

  ngOnInit() {
    this.loadProjetID();

    
  }

   loadProjetID() {
    var newObj: any;
     this.subscription.push(      
       this.pService.getProjet(this.projetId).pipe(
         tap(projet => {
           newObj = projet;
           this.loadClient(newObj.clientID);
           this.loadDevis(newObj.id);
           this.loadPlan(newObj.id);
           this.projet$ = projet;
         })
     ).subscribe()
     )
   }

  loadDevis(id) {
    this.devis$ = this.dService.getDevisProjet(id);
  }

  loadPlan(id) {
    this.plans$ = this.plService.getPlanss(id);
  }

  loadClient(id) {
    this.client$ = this.cService.getClientID(id).pipe(
      tap(p => {console.log(p)})
    );
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
