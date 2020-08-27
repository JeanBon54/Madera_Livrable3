import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { IonicModule } from '@ionic/angular';

import { RechercheProjetPageRoutingModule } from './recherche-projet-routing.module';
import { RechercheProjetPage } from './recherche-projet.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    IonicModule,
    RechercheProjetPageRoutingModule
  ],
  declarations: [RechercheProjetPage]
})
export class RechercheProjetPageModule {}
