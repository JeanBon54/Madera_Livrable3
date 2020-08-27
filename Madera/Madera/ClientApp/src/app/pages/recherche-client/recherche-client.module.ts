import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheClientPageRoutingModule } from './recherche-client-routing.module';

import { RechercheClientPage } from './recherche-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheClientPageRoutingModule
  ],
  declarations: [RechercheClientPage]
})
export class RechercheClientPageModule {}
