import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { FamilleComposantWebServiceService } from './../../../webServices/famille-composant-web-service.service'; 

import { NouveauComposantPageRoutingModule } from './nouveau-composant-routing.module';
import { ComposantWebServiceService } from './../../../webServices/composant-web-service.service';  
import { NouveauComposantPage } from './nouveau-composant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    NouveauComposantPageRoutingModule
  ],
  declarations: [NouveauComposantPage],
  providers: [ComposantWebServiceService,FamilleComposantWebServiceService]
})
export class NouveauComposantPageModule {}
