import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';


import { NouveauPlanPageRoutingModule } from './nouveau-plan-routing.module';
import { NouveauPlanPage } from './nouveau-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    NouveauPlanPageRoutingModule
  ],
  declarations: [NouveauPlanPage]
})
export class NouveauPlanPageModule {}
