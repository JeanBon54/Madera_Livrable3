import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheFamilleComposantPageRoutingModule } from './recherche-famille-composant-routing.module';
import { HeaderPage } from '../header/header.page';
import { HeaderMenuPage } from '../header-menu/header-menu.page';
import { FooterPage } from '../footer/footer.page';
import { RechercheFamilleComposantPage } from './recherche-famille-composant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheFamilleComposantPageRoutingModule
  ],
  declarations: [RechercheFamilleComposantPage, HeaderPage, FooterPage, HeaderMenuPage]
})
export class RechercheFamilleComposantPageModule {}
