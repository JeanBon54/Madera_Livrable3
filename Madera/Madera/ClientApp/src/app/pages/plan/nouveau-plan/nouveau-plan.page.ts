import { ChangeDetectorRef,Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,FormArray,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';


import { ProjetWebService } from './../../../webServices/projet-webservice.service';
import { Projet } from 'src/app/models/Projet';
import { Plan } from 'src/app/models/Plan';

import { PlanService } from './../../../WebServices/plan-webservice.service';

import { Plancher} from 'src/app/models/Plancher';
import { PlancherWebServiceService } from './../../../WebServices/plancher-web-service.service';
import { coupePrincipale} from 'src/app/models/coupePrincipale';
import { CoupePrincipaleWebServiceService } from './../../../WebServices/coupe-principale-web-service.service';
import { Couverture} from 'src/app/models/Couverture';
import { CouvertureWebServiceService } from './../../../WebServices/couverture-web-service.service';
import { Gamme} from 'src/app/models/Gamme';




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
  // gammes$: Observable<Gamme[]>;
  adresse : any;
  libellePlan : any;
  cp : any;
  ville : string;
  postId: number;
  projetId: number;
  actionType: string;
  existingPlanPost: Plan;
  cpId: number;
  plancherId: number;
  couvertureId: number;
  gammeId: any;
  listeModuleChecked: number[] = [];

  constructor(private pService: ProjetWebService,
    private cd: ChangeDetectorRef,
    private plService: PlanService, 
    private cpService: CoupePrincipaleWebServiceService,
    private plancherService: PlancherWebServiceService,
    private couvService: CouvertureWebServiceService,
    //private gammeService: GammeWebServiceService,
    private avRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {

      const idParam = 'id';
      this.actionType = 'Add';

    if (this.avRoute.snapshot.params[idParam]) {
      this.projetId = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        postId: 0,
      //  libellePlan: ['', [Validators.required]],
        adresse: ['', [Validators.required]],
        ville: ['', [Validators.required]],
        cp:'',
        cpId: 0,
        plancherId: 0,
        couvertureId:0
      }
    )


  }

  ngOnInit() {
      if (this.postId >= 0) {
          this.actionType = 'Add';
          this.plService.getPlan(this.postId)
          .subscribe(data => (
          this.existingPlanPost = data,
         // this.form.controls[this.libellePlan].setValue(data.LibellePlan),
          this.form.controls[this.adresse].setValue(data.AdressPlan),
          this.form.controls[this.ville].setValue(data.VillePlan),
          this.form.controls[this.cp].setValue(data.CpPlan),
          this.form.controls[this.cpId].setValue(data.CoupePrincipaleID),
           this.form.controls[this.plancherId].setValue(data.PlancherID),
          this.form.controls[this.couvertureId].setValue(data.CouvertureID)

        ));
     }
    this.loadCP();
    this.loadPlancher() 
    this.loadPlans();
    this.loadCouverture();
   // this.loadGamme() 
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

  // loadGamme() {
  //   this.gammes$ = this.gammeService.getGamme();
  // }

  loadCouverture() {
    this.couvertures$ = this.couvService.getCouverture();
  }

  loadPlans() {
    this.plans$ = this.plService.getPlans();
  }


  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let plan: Plan = {
        CoupePrincipaleID: this.form.value.cpId,
        PlancherID: this.form.value.plancherId,
        CouvertureID: this.form.value.couvertureId,
        ReferencePlan : 'test',
        LibellePlan : 'test',
        AdressPlan: this.form.value.adresse,
        CpPlan: this.form.value.cp,
        VillePlan: this.form.value.ville,
        IdUtilisateurCreation :1,
        DateCreation :new Date(),
        IdUtilisateurModification :1,
        DateModification :new Date(),
        DateArchivage :new Date(),
        ListeIdModule: []
  
      };

      this.plService.saveplan(plan)
        .subscribe((data) => {
          this.router.navigate(['api/Plans/', data.ID]);
        });
    }
  }

  

}
