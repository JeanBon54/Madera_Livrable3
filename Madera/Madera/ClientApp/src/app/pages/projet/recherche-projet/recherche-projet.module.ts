import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RechercheProjetPage } from './recherche-projet.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
  ],
   
  providers: [ClientWebServiceService],
  declarations: [RechercheProjetPage]
})
export class RechercheProjetPageModule {}
