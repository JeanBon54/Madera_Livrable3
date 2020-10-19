import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheClientPageRoutingModule } from './recherche-client-routing.module';

import { RechercheClientPage } from './recherche-client.page';
import { HeaderPage } from '../header/header.page';
import { HeaderMenuPage } from '../header-menu/header-menu.page';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheClientPageRoutingModule
  ],
  declarations: [RechercheClientPage, HeaderPage, FooterPage, HeaderMenuPage]
})
export class RechercheClientPageModule {}
