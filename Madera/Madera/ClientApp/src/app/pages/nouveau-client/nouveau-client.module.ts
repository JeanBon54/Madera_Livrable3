import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderPage } from '../header/header.page';
import { HeaderMenuPage } from '../header-menu/header-menu.page';
import { FooterPage } from '../footer/footer.page';
import { NouveauClientPageRoutingModule } from './nouveau-client-routing.module';

import { NouveauClientPage } from './nouveau-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouveauClientPageRoutingModule
  ],
  declarations: [NouveauClientPage, HeaderPage, FooterPage, HeaderMenuPage]
})
export class NouveauClientPageModule {}
