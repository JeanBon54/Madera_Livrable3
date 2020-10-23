import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RechercheProjetPage } from './recherche-projet.page';
import { ProjetService } from 'src/app/webServices/projet-webservice.service';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    BrowserModule,
  ],
   
  providers: [ProjetService],
  declarations: [RechercheProjetPage]
})
export class RechercheProjetPageModule {}
