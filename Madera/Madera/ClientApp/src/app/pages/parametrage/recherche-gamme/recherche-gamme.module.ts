import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { GammeWebServiceService } from './../../../webServices/gamme-web-service.service'; 

import { RechercheGammePageRoutingModule } from './recherche-gamme-routing.module';

import { RechercheGammePage } from './recherche-gamme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheGammePageRoutingModule
  ],
  declarations: [RechercheGammePage],
  providers: [GammeWebServiceService]
})
export class RechercheGammePageModule {}
