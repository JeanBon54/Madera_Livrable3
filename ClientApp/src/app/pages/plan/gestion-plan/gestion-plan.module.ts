import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionPlanPageRoutingModule } from './gestion-plan-routing.module';

import { GestionPlanPage } from './gestion-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionPlanPageRoutingModule
  ],
  declarations: [GestionPlanPage]
})
export class GestionPlanPageModule {}
