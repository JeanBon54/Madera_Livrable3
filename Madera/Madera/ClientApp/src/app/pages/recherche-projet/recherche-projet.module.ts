import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { IonicModule } from '@ionic/angular';

import { RechercheProjetPageRoutingModule } from './recherche-projet-routing.module';
import { RechercheProjetPage } from './recherche-projet.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTableModule,
    RechercheProjetPageRoutingModule
  ],
   
      
  declarations: [RechercheProjetPage]
})
export class RechercheProjetPageModule {}
