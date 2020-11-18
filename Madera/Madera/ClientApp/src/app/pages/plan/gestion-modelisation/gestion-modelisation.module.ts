import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';

import { GestionModelisationPageRoutingModule } from './gestion-modelisation-routing.module';

import { GestionModelisationPage } from './gestion-modelisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    GestionModelisationPageRoutingModule
  ],
  declarations: [GestionModelisationPage]
})
export class GestionModelisationPageModule {}
