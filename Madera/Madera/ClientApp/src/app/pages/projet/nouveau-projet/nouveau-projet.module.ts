import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouveauProjetPageRoutingModule } from './nouveau-projet-routing.module';
import { HeaderPage } from '../header/header.page';
import { HeaderMenuPage } from '../header-menu/header-menu.page';
import { FooterPage } from '../footer/footer.page';
import { NouveauProjetPage } from './nouveau-projet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouveauProjetPageRoutingModule
  ],
  declarations: [NouveauProjetPage, HeaderPage, FooterPage, HeaderMenuPage]
})
export class NouveauProjetPageModule {}
