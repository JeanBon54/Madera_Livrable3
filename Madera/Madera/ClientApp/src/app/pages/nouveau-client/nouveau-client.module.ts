import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouveauClientPageRoutingModule } from './nouveau-client-routing.module';

import { NouveauClientPage } from './nouveau-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouveauClientPageRoutingModule
  ],
  declarations: [NouveauClientPage]
})
export class NouveauClientPageModule {}
