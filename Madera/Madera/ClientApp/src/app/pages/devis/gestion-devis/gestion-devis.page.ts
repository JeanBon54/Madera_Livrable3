import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevisService } from '../../../WebServices/devis-webservice.service';
import { ModuleComposantService } from './../../../webServices/modulecomposant-webservice.service';
import { Observable } from 'rxjs';
import { ModuleComposant } from 'src/app/models/ModuleComposant';
import { Devis } from 'src/app/models/Devis';
import { tap } from 'rxjs/operators';
import { Client } from 'src/app/models/Client';
import { ClientWebServiceService } from 'src/app/webServices/client-web-service.service';
import { UtilisateurContextService } from '../../../../shared/utilisateur-context.service'
import { CoupePrincipaleWebServiceService } from 'src/app/WebServices/coupe-principale-web-service.service';
import { PlancherWebServiceService } from 'src/app/WebServices/plancher-web-service.service';
import { CouvertureWebServiceService } from 'src/app/WebServices/couverture-web-service.service';


@Component({
  selector: 'app-gestion-devis',
  templateUrl: './gestion-devis.page.html',
  styleUrls: ['./gestion-devis.page.scss','./../../../app.component.scss'],
})
export class GestionDevisPage implements OnInit {
  devis$: Observable<Devis>;
  lignesDevis$: Observable<Devis[]>;
  extraDevis$: Observable<Devis>;
  client$: Observable<Client>;
  utilisateur: Observable<Client>;
  devisId: number;

    constructor
    (
      private dService: DevisService,
      private avRoute: ActivatedRoute,
      private cService: ClientWebServiceService,
      private ucService: UtilisateurContextService,
      private cpService: CoupePrincipaleWebServiceService,
      private pService: PlancherWebServiceService,
      private coService: CouvertureWebServiceService
    ) 
    {
      const idParam = 'id';
      if (this.avRoute.snapshot.params[idParam]) {
        this.devisId = this.avRoute.snapshot.params[idParam];
      }
    }

  ngOnInit() {
    // this.loadDevis();
    
    // if(this.ucService.user$.getValue() != null) {

    //   this.ucService.user$.subscribe(value => this.utilisateur = value)
    //   console.log(this.utilisateur)
    // }
  }

  ionViewWillEnter() {
    this.loadDevis();
    
    if(this.ucService.user$.getValue() != null) {

      this.ucService.user$.subscribe(value => this.utilisateur = value)
      console.log(this.utilisateur)
    }
}

  loadDevis() {
    this.devis$ = this.dService.getDevis(this.devisId).pipe(tap(x => {this.loadLignesDevis(x.planID); this.loadExtraDevis(x.planID)}));
  }

  loadLignesDevis(id) {
    this.lignesDevis$ = this.dService.getLignesDevis(id);
  }

  loadExtraDevis(id) {
    this.extraDevis$ = this.dService.getExtraDevis(id);
  }

  exportPDF(id) {
   this.dService.genPDF(id).subscribe();
  }



  back() {
    window.history.go(-1);
  }

}
