import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 


import { IonicModule } from '@ionic/angular';

import { CLientsPageRoutingModule } from './clients-routing.module';
import { ClientWebServiceService } from './../../../webServices/client-web-service.service'; 

import { CLientsPage } from './clients.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CLientsPageRoutingModule
  ],
  declarations: [CLientsPage]
})
export class CLientsPageModule {}
