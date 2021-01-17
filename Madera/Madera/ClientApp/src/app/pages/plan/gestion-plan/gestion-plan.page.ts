import { Component, OnInit } from '@angular/core';
import { Plan } from '../../../models/Plan';
import { PlanService } from './../../../WebServices/plan-webservice.service';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gestion-plan',
  templateUrl: './gestion-plan.page.html',
  styleUrls: ['./gestion-plan.page.scss', './../../../app.component.scss'],
})
export class GestionPlanPage implements OnInit {
  planId: number;
  plan$: Observable<Plan>;
  
  constructor(private pService: PlanService,
    private avRoute: ActivatedRoute) {
  const idParam = 'id';
  if (this.avRoute.snapshot.params[idParam]) {
    this.planId = this.avRoute.snapshot.params[idParam];
  }
}

  ngOnInit() {
    this.loadPlan();
  }
  
  loadPlan() {
    this.plan$ = this.pService.getPlan(this.planId);
  }

  back() {
    window.history.go(-1);
  }
}
