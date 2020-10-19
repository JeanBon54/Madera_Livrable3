import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionProjetPage } from './gestion-projet.page';

const routes: Routes = [
  {
    path: '',
    component: GestionProjetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionProjetPageRoutingModule {}
