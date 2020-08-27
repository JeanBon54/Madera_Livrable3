import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouveauProjetPage } from './nouveau-projet.page';

const routes: Routes = [
  {
    path: '',
    component: NouveauProjetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouveauProjetPageRoutingModule {}
