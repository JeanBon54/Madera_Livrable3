import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { FamilleComposantWebServiceService } from './../../../webServices/famille-composant-web-service.service'; 

import { RechercheFamilleComposantPageRoutingModule } from './recherche-famille-composant-routing.module';

import { RechercheFamilleComposantPage } from './recherche-famille-composant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    RechercheFamilleComposantPageRoutingModule
  ],
  declarations: [RechercheFamilleComposantPage],
  providers: [FamilleComposantWebServiceService]
})
export class RechercheFamilleComposantPageModule {}
