import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheModulePageRoutingModule } from './recherche-module-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWebServiceService } from './../../../webServices/module-web-service.service';  
import { RechercheModulePage } from './recherche-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheModulePageRoutingModule
  ],
  declarations: [RechercheModulePage],
  providers: [ModuleWebServiceService]
})
export class RechercheModulePageModule {}
