import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheComposantPageRoutingModule } from './recherche-composant-routing.module';

import { RechercheComposantPage } from './recherche-composant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheComposantPageRoutingModule
  ],
  declarations: [RechercheComposantPage]
})
export class RechercheComposantPageModule {}
