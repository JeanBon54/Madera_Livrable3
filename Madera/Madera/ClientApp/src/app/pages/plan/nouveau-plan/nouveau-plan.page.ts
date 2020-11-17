import { ChangeDetectorRef,Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,FormArray,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';


import { ProjetWebService } from './../../../webServices/projet-webservice.service';
import { Projet } from 'src/app/models/Projet';
import { Devis } from 'src/app/models/Devis';
import { Plan } from 'src/app/models/Plan';
import { PlanService } from './../../../WebServices/plan-webservice.service';

import { Plancher} from 'src/app/models/Plancher';
import { PlancherWebServiceService } from './../../../WebServices/plancher-web-service.service';
import { coupePrincipale} from 'src/app/models/coupePrincipale';
import { CoupePrincipaleWebServiceService } from './../../../WebServices/coupe-principale-web-service.service';
import { Couverture} from 'src/app/models/Couverture';
import { CouvertureWebServiceService } from './../../../WebServices/couverture-web-service.service';
import { Gamme} from 'src/app/models/Gamme';
import { GammeWebServiceService } from './../../../WebServices/gamme-web-service.service';



@Component({
  selector: 'app-nouveau-plan',
  templateUrl: './nouveau-plan.page.html',
  styleUrls: ['./nouveau-plan.page.scss', './../../../app.component.scss'],
})
export class NouveauPlanPage implements OnInit {
  form: FormGroup;
  projet$: Observable<Projet[]>;
  plans$: Observable<Plan[]>;
  coupePrincipal$: Observable<coupePrincipale[]>;
  planchers$: Observable<Plancher[]>;
  couvertures$: Observable<Couverture[]>;
  gammes$: Observable<Gamme[]>;
  projetId: number;

  constructor(private pService: ProjetWebService,
    private plService: PlanService, 
    private cpService: CoupePrincipaleWebServiceService,
    private plancherService: PlancherWebServiceService,
    private couvService: CouvertureWebServiceService,
    private gammeService: GammeWebServiceService,
    private avRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {

    const idParam = 'id';

    if (this.avRoute.snapshot.params[idParam]) {
      this.projetId = this.avRoute.snapshot.params[idParam];
    }
  }

  ngOnInit() {
   this.loadCP();
   this.loadPlancher() 
   this.loadPlans();
   this.loadCouverture();
   this.loadGamme() 
  }

  loadProjet() {
    this.projet$ = this.pService.getProjets();
  }

  loadCP() {
    this.coupePrincipal$ = this.cpService.getCoupePrincipal();
  }

  loadPlancher() {
    this.planchers$ = this.plancherService.getPlanchers();
  }

  loadGamme() {
    this.gammes$ = this.gammeService.getGamme();
  }

  loadCouverture() {
    this.couvertures$ = this.couvService.getCouverture();
  }

  loadPlans() {
    this.plans$ = this.plService.getPlans();
  }

}
