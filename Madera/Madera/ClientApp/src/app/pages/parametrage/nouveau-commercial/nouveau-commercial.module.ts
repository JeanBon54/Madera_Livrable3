import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';

import { ComposantWebServiceService } from './../../../webServices/composant-web-service.service'; 

import { NouveauCommercialPageRoutingModule } from './nouveau-commercial-routing.module';
import { NouveauCommercialPage } from './nouveau-commercial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    NouveauCommercialPageRoutingModule
  ],
  declarations: [NouveauCommercialPage],
  providers: [ComposantWebServiceService]
})
export class NouveauCommercialPageModule {}
