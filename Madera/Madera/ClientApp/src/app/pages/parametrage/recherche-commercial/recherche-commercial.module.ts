import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HttpClientModule }    from '@angular/common/http';  


import { RechercheCommercialPageRoutingModule } from './recherche-commercial-routing.module';
import { HeaderPage } from '../header/header.page';
import { HeaderMenuPage } from '../header-menu/header-menu.page';
import { FooterPage } from '../footer/footer.page';
import { RechercheCommercialPage } from './recherche-commercial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RechercheCommercialPageRoutingModule
  ],
  declarations: [RechercheCommercialPage, HeaderPage, FooterPage, HeaderMenuPage]
})
export class RechercheCommercialPageModule {}
