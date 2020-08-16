import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionProjetPageRoutingModule } from './gestion-projet-routing.module';

import { GestionProjetPage } from './gestion-projet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionProjetPageRoutingModule
  ],
  declarations: [GestionProjetPage]
})
export class GestionProjetPageModule {}
