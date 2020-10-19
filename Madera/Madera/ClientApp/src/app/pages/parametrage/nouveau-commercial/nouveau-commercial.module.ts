import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouveauCommercialPageRoutingModule } from './nouveau-commercial-routing.module';
import { HeaderPage } from '../header/header.page';
import { HeaderMenuPage } from '../header-menu/header-menu.page';
import { FooterPage } from '../footer/footer.page';
import { NouveauCommercialPage } from './nouveau-commercial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouveauCommercialPageRoutingModule
  ],
  declarations: [NouveauCommercialPage, HeaderPage, FooterPage, HeaderMenuPage]
})
export class NouveauCommercialPageModule {}
