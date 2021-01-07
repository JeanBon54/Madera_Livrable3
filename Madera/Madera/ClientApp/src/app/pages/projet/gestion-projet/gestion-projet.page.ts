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
  projetId: number;
  remarque = '';

  constructor(
    private pService: ProjetWebService,
    private dService: DevisService,
    private cService: ClientWebServiceService,
    private avRoute: ActivatedRoute,  
    private formBuilder: FormBuilder) {
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
    // this.loadProjet();
    this.loadDevis();
    
  }

  //  loadProjet() {
  //    this.subscription.push(
  //      this.pService.getProjet(this.projetId).pipe(
  //        tap(projet => {
  //          this.projet$ = projet;
  //          this.remarque = this.projet$.libelleRemarque;
  //        })
  //      ).subscribe()
  //    ) 
  //  }

   loadProjetID() {
    var newObj: any;
     this.subscription.push(      
       this.pService.getProjet(this.projetId).pipe(
         tap(projet => {
           newObj = projet;
           this.loadClient(newObj.clientID);
           this.projet$ = projet;
         })
     ).subscribe()
     )
   }

  loadDevis() {
    // this.devis$ = this.dService.getDeviss();
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
