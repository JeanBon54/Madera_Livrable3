import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionModelisationPageRoutingModule } from './gestion-modelisation-routing.module';

import { GestionModelisationPage } from './gestion-modelisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionModelisationPageRoutingModule
  ],
  declarations: [GestionModelisationPage]
})
export class GestionModelisationPageModule {}
