import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HttpClientModule }    from '@angular/common/http';  

import { CommercialWebServiceService } from './../../../webServices/commercial-web-service.service'; 

import { RechercheCommercialPageRoutingModule } from './recherche-commercial-routing.module';

import { RechercheCommercialPage } from './recherche-commercial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RechercheCommercialPageRoutingModule
  ],
  declarations: [RechercheCommercialPage],
  providers: [CommercialWebServiceService]
})
export class RechercheCommercialPageModule {}
