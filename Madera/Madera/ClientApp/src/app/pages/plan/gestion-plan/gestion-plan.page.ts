import { Component, OnInit } from '@angular/core';
import { Plan } from '../../../models/Plan';
import { PlanService } from './../../../WebServices/plan-webservice.service';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';
import { Devis } from '../../../models/Devis';
import { DevisService } from '../../../WebServices/devis-webservice.service';

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

  
  constructor(private pService: PlanService,
    private avRoute: ActivatedRoute,
    private dService: DevisService,) {
  const idParam = 'id';
  if (this.avRoute.snapshot.params[idParam]) {
    this.planId = this.avRoute.snapshot.params[idParam];
  }
}

  ngOnInit() {
    this.loadPlan();
    this.loadExtraDevis();
  }
  
  loadPlan() {
    this.plan$ = this.pService.getPlan(this.planId);
    console.log(this.planId)
    this.loadDevis();
  }

  loadExtraDevis() {
    this.extraDevis$ = this.dService.getExtraDevis(this.planId);
  }

  loadDevis() {
    this.devis$ = this.dService.getDevisPlan(this.planId);
  }

  createDevis() {
    this.dService.getCreateDevis(this.planId).subscribe(function(data) {
      console.log(data);
    });
  }

  back() {
    window.history.go(-1);
  }
}
