import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';  

import { NouveauProjetPageRoutingModule } from './nouveau-projet-routing.module';
import { NouveauProjetPage } from './nouveau-projet.page';
import { ProjetWebService } from './../../../webServices/projet-webservice.service';
import { AutocompleteClientService } from 'src/app/webServices/autocomplete-client.service';
import { AutoCompleteModule } from 'ionic4-auto-complete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    NouveauProjetPageRoutingModule,
    AutoCompleteModule
  ],
  declarations: [NouveauProjetPage],
  providers: [ProjetWebService,AutocompleteClientService]
})
export class NouveauProjetPageModule {}
