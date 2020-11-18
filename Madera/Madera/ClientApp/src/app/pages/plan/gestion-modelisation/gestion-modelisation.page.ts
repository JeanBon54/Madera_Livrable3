import { ChangeDetectorRef,Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,FormArray,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';


import { Plan } from 'src/app/models/Plan';
import { PlanService } from './../../../WebServices/plan-webservice.service';
import { Module} from 'src/app/models/Module';
import { ModuleService } from './../../../webServices/module-web-service.service';  



@Component({
  selector: 'app-gestion-modelisation',
  templateUrl: './gestion-modelisation.page.html',
  styleUrls: ['./gestion-modelisation.page.scss', './../../../app.component.scss'],
})
export class GestionModelisationPage implements OnInit {

  form: FormGroup;
  actionType: string;
  postId: number;
  errorMessage: any;
  module$: Observable<Module[]>;
  listeModuleChecked: number[] = [];
  id : any;
  adresse : any;
  libellePlan : any;
  cp : any;
  ville : string;
  projetId: number;
  existingPlanPost: Plan;
  cpId: number;
  plancherId: number;
  couvertureId: number;
  gammeId: any;

  constructor(private moduleService: ModuleService, 
    private cd: ChangeDetectorRef,
    private formBuilder: FormBuilder, 
 private planService: PlanService, 
    private avRoute: ActivatedRoute, 
    private router: Router) {
  
      const idParam = 'id';
      this.actionType = 'Add';
      
      if (this.avRoute.snapshot.params[idParam]) {
        this.postId = this.avRoute.snapshot.params[idParam];
      }
  
      this.form = this.formBuilder.group(
        {
          postId: 0,
         // libelleModule: ['', [Validators.required]],
        }
      )
    }


  ngOnInit() {
    if (this.postId >= 0) {
       this.actionType = 'Add';
       this.planService.getPlan(this.postId)
         .subscribe(data => (
           this.existingPlanPost = data,
           this.form.controls['libelleModule'].setValue(data.LibellePlan)
         ));
     }
    this.loadModule();
  }

  loadModule() {
    this.module$ = this.moduleService.getModules();
  }

  submitForm() {
    console.log(this.form.value)
  }



  onCheckboxChange(e) {
    if (e.target.checked) {
      this.listeModuleChecked.push(e.target.value);
    } else {
      const indexItem = this.listeModuleChecked.indexOf(e.target.value);
      if (indexItem !== -1) {
        this.listeModuleChecked.splice(indexItem, 1);
      }
    }
    console.log(this.listeModuleChecked);
  }



  save() {
   if (!this.form.valid || !this.listeModuleChecked || this.listeModuleChecked.length === 0) {
       return;
     }

    if (this.actionType === 'Add') {
      const plan: Plan = {
        ID :2002,
        CoupePrincipaleID: 1,
        PlancherID: 1,
        CouvertureID: 1,
        ReferencePlan : 'test',
        LibellePlan : 'test',
        AdressPlan: 'test',
        CpPlan: 88000,
        VillePlan: 'azert',
        IdUtilisateurCreation :1,
        DateCreation :new Date(),
        IdUtilisateurModification :1,
        DateModification :new Date(),
        DateArchivage :new Date(),
        ListeIdModule: this.listeModuleChecked,
      };
  console.log(plan);
 this.planService.saveplan(plan)
     .subscribe((data) => {
      this.router.navigate(['api/Plans/', data.ID]);
    });
     }
   }
}
