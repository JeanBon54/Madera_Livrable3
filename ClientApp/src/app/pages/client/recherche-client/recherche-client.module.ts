import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheClientPageRoutingModule } from './recherche-client-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { ClientWebServiceService } from './../../../webServices/client-web-service.service'; 

import { RechercheClientPage } from './recherche-client.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RechercheClientPageRoutingModule
  ],
  declarations: [RechercheClientPage],
  providers: [ClientWebServiceService]
})
export class RechercheClientPageModule {}
