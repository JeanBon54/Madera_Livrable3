import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { IonicModule } from '@ionic/angular';

import { RechercheModulePageRoutingModule } from './recherche-module-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ModuleService } from './../../../webServices/module-web-service.service';  
import { RechercheModulePage } from './recherche-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    RechercheModulePageRoutingModule
  ],
  declarations: [RechercheModulePage],
  providers: [ModuleService]
})
export class RechercheModulePageModule {}
