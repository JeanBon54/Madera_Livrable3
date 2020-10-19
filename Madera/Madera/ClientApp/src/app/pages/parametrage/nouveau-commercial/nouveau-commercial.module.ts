import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouveauCommercialPageRoutingModule } from './nouveau-commercial-routing.module';
import { NouveauCommercialPage } from './nouveau-commercial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouveauCommercialPageRoutingModule
  ],
  declarations: [NouveauCommercialPage]
})
export class NouveauCommercialPageModule {}
