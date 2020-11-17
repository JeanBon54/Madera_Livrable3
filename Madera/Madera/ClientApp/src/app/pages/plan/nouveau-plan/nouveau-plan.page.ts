import { ChangeDetectorRef,Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,FormArray,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';


import { ProjetWebService } from './../../../webServices/projet-webservice.service';
import { Projet } from 'src/app/models/Projet';
import { Devis } from 'src/app/models/Devis';
import { Plan } from 'src/app/models/Plan';
import { DevisService } from './../../../WebServices/devis-webservice.service';
import { PlanService } from './../../../WebServices/plan-webservice.service';


@Component({
  selector: 'app-nouveau-plan',
  templateUrl: './nouveau-plan.page.html',
  styleUrls: ['./nouveau-plan.page.scss', './../../../app.component.scss'],
})
export class NouveauPlanPage implements OnInit {
  form: FormGroup;
  projet$: Observable<Projet[]>;
  plans$: Observable<Plan[]>;
  devis$: Observable<Devis[]>;
  projetId: number;

  constructor(private pService: ProjetWebService,
    private plService: PlanService, 
    private dService: DevisService,
    private avRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {

    const idParam = 'id';

    if (this.avRoute.snapshot.params[idParam]) {
      this.projetId = this.avRoute.snapshot.params[idParam];
    }
  }

  ngOnInit() {
   this.loadProjet();
   this.loadPlans();
  }

  loadProjet() {
    this.projet$ = this.pService.getProjets();
  }

  loadPlans() {
    this.plans$ = this.plService.getPlans();
  }

}
