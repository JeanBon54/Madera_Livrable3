import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheModulePageRoutingModule } from './recherche-module-routing.module';

import { RechercheModulePage } from './recherche-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheModulePageRoutingModule
  ],
  declarations: [RechercheModulePage]
})
export class RechercheModulePageModule {}
