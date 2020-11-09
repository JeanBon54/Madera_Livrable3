import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { IonicModule } from '@ionic/angular';

import { RechercheComposantPageRoutingModule } from './recherche-composant-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ComposantWebServiceService } from './../../../webServices/composant-web-service.service'; 
import { RechercheComposantPage } from './recherche-composant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    RechercheComposantPageRoutingModule
  ],
  declarations: [RechercheComposantPage],
  providers: [ComposantWebServiceService]
})
export class RechercheComposantPageModule {}
