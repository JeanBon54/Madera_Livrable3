import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouvelleFamilleComposantPageRoutingModule } from './nouvelle-famille-composant-routing.module';

import { NouvelleFamilleComposantPage } from './nouvelle-famille-composant.page';
import { HeaderPage } from '../header/header.page';
import { HeaderMenuPage } from '../header-menu/header-menu.page';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouvelleFamilleComposantPageRoutingModule
  ],
  declarations: [NouvelleFamilleComposantPage, HeaderPage, FooterPage, HeaderMenuPage]
})
export class NouvelleFamilleComposantPageModule {}
