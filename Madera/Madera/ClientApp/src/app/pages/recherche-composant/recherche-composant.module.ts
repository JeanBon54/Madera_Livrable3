import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheComposantPageRoutingModule } from './recherche-composant-routing.module';
import { HeaderPage } from '../header/header.page';
import { HeaderMenuPage } from '../header-menu/header-menu.page';
import { FooterPage } from '../footer/footer.page';
import { RechercheComposantPage } from './recherche-composant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheComposantPageRoutingModule
  ],
  declarations: [RechercheComposantPage, HeaderPage, FooterPage, HeaderMenuPage]
})
export class RechercheComposantPageModule {}
