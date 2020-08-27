import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheDevisPage } from './recherche-devis.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheDevisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheDevisPageRoutingModule {}
