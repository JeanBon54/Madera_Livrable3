import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { NouveauProjetPageRoutingModule } from './nouveau-projet-routing.module';
import { NouveauProjetPage } from './nouveau-projet.page';
import { ProjetWebService } from './../../../webServices/projet-webservice.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    NouveauProjetPageRoutingModule
  ],
  declarations: [NouveauProjetPage],
  providers: [ProjetWebService]
})
export class NouveauProjetPageModule {}
