import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';  

import { RechercheProjetPage } from './recherche-projet.page';
import { RechercheProjetPageRoutingModule } from './recherche-projet-routing.module';
import { ProjetWebService } from './../../../webServices/projet-webservice.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    RechercheProjetPageRoutingModule,
  ],
  declarations: [RechercheProjetPage], 
  providers: [ProjetWebService]
  
})
export class RechercheProjetPageModule {}
