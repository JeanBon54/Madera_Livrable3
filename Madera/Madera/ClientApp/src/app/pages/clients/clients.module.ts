import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CLientsPageRoutingModule } from './clients-routing.module';

import { CLientsPage } from './clients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CLientsPageRoutingModule
  ],
  declarations: [CLientsPage]
})
export class CLientsPageModule {}
