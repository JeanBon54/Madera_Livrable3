import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';


import { CommercialWebService } from './../../../webServices/commercial-web-service.service';  
import { NouveauCommercialPageRoutingModule } from './nouveau-commercial-routing.module';
import { NouveauCommercialPage } from './nouveau-commercial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    NouveauCommercialPageRoutingModule
  ],
  declarations: [NouveauCommercialPage],
  providers: [CommercialWebService]
})
export class NouveauCommercialPageModule {}
