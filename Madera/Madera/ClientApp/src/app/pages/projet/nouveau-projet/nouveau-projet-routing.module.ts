import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionProjetPage } from '../gestion-projet/gestion-projet.page';

import { NouveauProjetPage } from './nouveau-projet.page';

const routes: Routes = [
  { path: '', component: NouveauProjetPage },
  { path: 'projet/:id', component: GestionProjetPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouveauProjetPageRoutingModule {}
