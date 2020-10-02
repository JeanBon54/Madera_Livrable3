import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouveauComposantPageRoutingModule } from './nouveau-composant-routing.module';

import { NouveauComposantPage } from './nouveau-composant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouveauComposantPageRoutingModule
  ],
  declarations: [NouveauComposantPage]
})
export class NouveauComposantPageModule {}
