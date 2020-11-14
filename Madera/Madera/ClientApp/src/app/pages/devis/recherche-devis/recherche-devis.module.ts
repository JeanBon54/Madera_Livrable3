import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';

import { DevisService } from '../../../WebServices/devis-webservice.service'; 

import { RechercheDevisPageRoutingModule } from './recherche-devis-routing.module';

import { RechercheDevisPage } from './recherche-devis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheDevisPageRoutingModule
  ],
  declarations: [RechercheDevisPage],
  providers: [DevisService]
})
export class RechercheDevisPageModule {}
