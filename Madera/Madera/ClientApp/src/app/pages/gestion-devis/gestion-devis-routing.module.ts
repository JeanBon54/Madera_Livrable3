import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionDevisPage } from './gestion-devis.page';

const routes: Routes = [
  {
    path: '',
    component: GestionDevisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionDevisPageRoutingModule {}
