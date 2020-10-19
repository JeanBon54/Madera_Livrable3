import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouveauModulePageRoutingModule } from './nouveau-module-routing.module';
import { HeaderPage } from '../header/header.page';
import { HeaderMenuPage } from '../header-menu/header-menu.page';
import { FooterPage } from '../footer/footer.page';
import { NouveauModulePage } from './nouveau-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouveauModulePageRoutingModule
  ],
  declarations: [NouveauModulePage, HeaderPage, FooterPage, HeaderMenuPage]
})
export class NouveauModulePageModule {}
