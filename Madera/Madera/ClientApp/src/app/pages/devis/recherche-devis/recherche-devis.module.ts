import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheDevisPageRoutingModule } from './recherche-devis-routing.module';
import { HeaderPage } from '../header/header.page';
import { HeaderMenuPage } from '../header-menu/header-menu.page';
import { FooterPage } from '../footer/footer.page';
import { RechercheDevisPage } from './recherche-devis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheDevisPageRoutingModule
  ],
  declarations: [RechercheDevisPage, HeaderPage, FooterPage, HeaderMenuPage]
})
export class RechercheDevisPageModule {}
