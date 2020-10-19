import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouveauModulePageRoutingModule } from './nouveau-module-routing.module';

import { NouveauModulePage } from './nouveau-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouveauModulePageRoutingModule
  ],
  declarations: [NouveauModulePage]
})
export class NouveauModulePageModule {}
