import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouveauPlanPageRoutingModule } from './nouveau-plan-routing.module';

import { NouveauPlanPage } from './nouveau-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouveauPlanPageRoutingModule
  ],
  declarations: [NouveauPlanPage]
})
export class NouveauPlanPageModule {}
