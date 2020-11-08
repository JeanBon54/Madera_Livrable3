import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { NouveauClientPageRoutingModule } from './nouveau-client-routing.module';

import { NouveauClientPage } from './nouveau-client.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    NouveauClientPageRoutingModule
  ],
  declarations: [NouveauClientPage]
})
export class NouveauClientPageModule {}
