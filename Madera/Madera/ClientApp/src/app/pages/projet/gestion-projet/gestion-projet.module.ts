import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';  

import { GestionProjetPageRoutingModule } from './gestion-projet-routing.module';
import { ProjetWebService } from './../../../webServices/projet-webservice.service';
import { DevisService } from './../../../webServices/devis-webservice.service';
import { PlanService } from './../../../webServices/plan-webservice.service';
import { GestionProjetPage } from './gestion-projet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionProjetPageRoutingModule,
    HttpClientModule
  ],
  declarations: [GestionProjetPage],
  providers: [ProjetWebService,DevisService,PlanService]
})
export class GestionProjetPageModule {}
