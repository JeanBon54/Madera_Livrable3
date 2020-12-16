import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouvelleGammePageRoutingModule } from './nouvelle-gamme-routing.module';

import { NouvelleGammePage } from './nouvelle-gamme.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouvelleGammePageRoutingModule
  ],
  declarations: [NouvelleGammePage]
})
export class NouvelleGammePageModule {}
