import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { FamilleComposantWebServiceService } from './../../../webServices/famille-composant-web-service.service'; 

import { RechercheFamilleComposantPageRoutingModule } from './recherche-famille-composant-routing.module';

import { RechercheFamilleComposantPage } from './recherche-famille-composant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheFamilleComposantPageRoutingModule
  ],
  declarations: [RechercheFamilleComposantPage],
  providers: [FamilleComposantWebServiceService]
})
export class RechercheFamilleComposantPageModule {}
