import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheGammePageRoutingModule } from './recherche-gamme-routing.module';
import { HeaderPage } from '../header/header.page';
import { HeaderMenuPage } from '../header-menu/header-menu.page';
import { FooterPage } from '../footer/footer.page';
import { RechercheGammePage } from './recherche-gamme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheGammePageRoutingModule
  ],
  declarations: [RechercheGammePage, HeaderPage, FooterPage, HeaderMenuPage]
})
export class RechercheGammePageModule {}
