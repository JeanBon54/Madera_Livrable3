import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionPage } from '../../connexion/connexion.page';

import { MenuPrincipalPage } from './menu-principal.page';

const routes: Routes = [
  { path: '', component: MenuPrincipalPage },
  { path: 'connexion', component: ConnexionPage }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPrincipalPageRoutingModule {}
