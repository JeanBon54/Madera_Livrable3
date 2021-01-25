import { Component, OnInit } from '@angular/core';
import { Plan } from '../../../models/Plan';
import { PlanService } from './../../../WebServices/plan-webservice.service';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Observable, pipe } from 'rxjs';
import { Devis } from '../../../models/Devis';
import { DevisService } from '../../../WebServices/devis-webservice.service';
import { ModuleService } from 'src/app/webServices/module-web-service.service';
import { ModulePlans } from 'src/app/models/ModulePlans';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-gestion-plan',
  templateUrl: './gestion-plan.page.html',
  styleUrls: ['./gestion-plan.page.scss', './../../../app.component.scss'],
})
export class GestionPlanPage implements OnInit {
  planId: number;
  plan$: Observable<Plan>;
  extraDevis$: Observable<Devis>;
  devis$: Observable<Devis[]>;
  modulePlan$ : Observable<ModulePlans[]>; 
  ligneModulePlan$ : Observable<ModulePlans[]>; 

  
  constructor(private pService: PlanService,
    private avRoute: ActivatedRoute,
    private dService: DevisService,
    private mpService: ModuleService) {
  const idParam = 'id';
  if (this.avRoute.snapshot.params[idParam]) {
    this.planId = this.avRoute.snapshot.params[idParam];
  }
}

  // ngOnInit() {
  //  this.loadPlan();
  //  this.loadExtraDevis();
  //  this.loadModulePlns();
  //  this.loadLigneModulePlns();
  // }

  ionViewWillEnter() {
    this.loadPlan();
    this.loadExtraDevis();
    this.loadModulePlns();
    this.loadLigneModulePlns();
    this.loadDevis();
}
  
  loadPlan() {
    this.plan$ = this.pService.getPlan(this.planId);
    console.log(this.planId);
   // this.loadDevis();
  }

  loadExtraDevis() {
    this.extraDevis$ = this.dService.getExtraDevis(this.planId);
  }

  loadDevis() {
    this.devis$ = this.dService.getDevisPlan(this.planId);
  }

  loadModulePlns() {
    this.modulePlan$ = this.mpService.getModulePlans(this.planId);
  }

  loadLigneModulePlns() {
    this.ligneModulePlan$ = this.mpService.getLignesModulePlans(this.planId);
  }

  createDevis() {
    this.dService.getCreateDevis(this.planId).subscribe(pipe(x => this.loadDevis()));
  }

  doRefresh(event) {  
    setTimeout(() => {
      this.loadPlan();
      this.loadExtraDevis();
      this.loadModulePlns();
      this.loadLigneModulePlns();
      this.loadDevis();
      event.target.complete();
    }, 1500); 
  } 

  back() {
    window.history.go(-1);
  }
}
