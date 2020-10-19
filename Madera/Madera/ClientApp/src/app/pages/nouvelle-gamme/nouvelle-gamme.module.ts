import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouvelleGammePageRoutingModule } from './nouvelle-gamme-routing.module';

import { NouvelleGammePage } from './nouvelle-gamme.page';
import { HeaderPage } from '../header/header.page';
import { HeaderMenuPage } from '../header-menu/header-menu.page';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouvelleGammePageRoutingModule
  ],
  declarations: [NouvelleGammePage, HeaderPage, FooterPage, HeaderMenuPage]
})
export class NouvelleGammePageModule {}
