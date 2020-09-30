import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheModulePageRoutingModule } from './recherche-module-routing.module';
import { HeaderPage } from '../header/header.page';
import { HeaderMenuPage } from '../header-menu/header-menu.page';
import { FooterPage } from '../footer/footer.page';
import { RechercheModulePage } from './recherche-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheModulePageRoutingModule
  ],
  declarations: [RechercheModulePage, HeaderPage, FooterPage, HeaderMenuPage]
})
export class RechercheModulePageModule {}
