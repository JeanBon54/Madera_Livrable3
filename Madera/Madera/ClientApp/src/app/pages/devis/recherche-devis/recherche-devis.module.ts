import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheDevisPageRoutingModule } from './recherche-devis-routing.module';

import { RechercheDevisPage } from './recherche-devis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheDevisPageRoutingModule
  ],
  declarations: [RechercheDevisPage]
})
export class RechercheDevisPageModule {}
