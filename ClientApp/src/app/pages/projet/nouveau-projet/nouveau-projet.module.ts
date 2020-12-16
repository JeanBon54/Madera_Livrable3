import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouveauProjetPageRoutingModule } from './nouveau-projet-routing.module';
import { NouveauProjetPage } from './nouveau-projet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouveauProjetPageRoutingModule
  ],
  declarations: [NouveauProjetPage]
})
export class NouveauProjetPageModule {}
