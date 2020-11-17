import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
import { NouveauModulePageRoutingModule } from './nouveau-module-routing.module';

import { NouveauModulePage } from './nouveau-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    NouveauModulePageRoutingModule
  ],
  declarations: [NouveauModulePage]
})
export class NouveauModulePageModule {}
