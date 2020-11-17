import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';

import { DevisService } from '../../../WebServices/devis-webservice.service'; 

import { RechercheDevisPageRoutingModule } from './recherche-devis-routing.module';
import { RechercheDevisPage } from './recherche-devis.page';
import { ProjetWebService } from './../../../webServices/projet-webservice.service';
import { PlanService } from './../../../WebServices/plan-webservice.service';
import { ClientWebServiceService } from './../../../webServices/client-web-service.service'; 


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    RechercheDevisPageRoutingModule
  ],
  declarations: [RechercheDevisPage],
  providers: [ProjetWebService,,DevisService,PlanService,ClientWebServiceService]
})
export class RechercheDevisPageModule {}
