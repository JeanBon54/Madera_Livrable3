import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetWebService } from './../../../webServices/projet-webservice.service';
import { Observable } from 'rxjs';


import { Projet, ProjetCommercial } from 'src/app/models/Projet';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchProjet } from '../../../models/Search/SearchProjet';
import { Devis } from 'src/app/models/Devis';
import { Plan } from 'src/app/models/Plan';
import { Client } from 'src/app/models/Client';
import { DevisService } from './../../../WebServices/devis-webservice.service';
import { PlanService } from './../../../WebServices/plan-webservice.service';
import { ClientWebServiceService } from './../../../webServices/client-web-service.service'; 


@Component({
  selector: 'app-recherche-devis',
  templateUrl: './recherche-devis.page.html',
  styleUrls: ['./recherche-devis.page.scss', './../../../app.component.scss'],
})

export class RechercheDevisPage implements OnInit {

  projets$: Observable<Projet[]>;
  plan$: Observable<Plan[]>;
  devis$: Observable<Devis[]>;
  clients$: Observable<Client[]>;
  
  form: FormGroup;

  constructor(private projetService: ProjetWebService,
    private plService: PlanService, 
    private dService: DevisService,
    private cService: ClientWebServiceService,
    private cd: ChangeDetectorRef,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        reference: ['', []],
        client: ['', []], 
        date: ['', []]
      }
    )
    this.loadDevis();
    this.loadClient();
  }

  loadProjet() {
   this.projets$ = this.projetService.getProjets();
  }


  loadDevis() {
    this.devis$ = this.dService.getDeviss();
  }

  loadPlans() {
    this.plan$ = this.plService.getPlans();
  }

  loadClient() {
    this.clients$ = this.cService.getClient();
  }

  searchDevis() {
    const search: SearchProjet = {
      LibelleProjet: this.form.get("reference").value,
      ClientId: this.form.get("client").value ? this.form.get("client").value : null,
      DateCreation: this.form.get("date").value ? this.form.get("date").value : null
      // ClientId: this.form.value.client ? this.form.value.client:null,
    };

    const searchString = JSON.stringify(search);
    this.projets$ = this.projetService.searchProjet<Projet[]>(searchString);

  }

}





