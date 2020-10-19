import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouvelleFamilleComposantPageRoutingModule } from './nouvelle-famille-composant-routing.module';

import { NouvelleFamilleComposantPage } from './nouvelle-famille-composant.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouvelleFamilleComposantPageRoutingModule
  ],
  declarations: [NouvelleFamilleComposantPage]
})
export class NouvelleFamilleComposantPageModule {}
