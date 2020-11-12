import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';

import { ComposantWebServiceService } from './../../../webServices/composant-web-service.service'; 
import { NouvelleFamilleComposantPageRoutingModule } from './nouvelle-famille-composant-routing.module';

import { NouvelleFamilleComposantPage } from './nouvelle-famille-composant.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    NouvelleFamilleComposantPageRoutingModule
  ],
  declarations: [NouvelleFamilleComposantPage],
  providers: [ComposantWebServiceService]
})
export class NouvelleFamilleComposantPageModule {}
