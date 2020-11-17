import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';  





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
