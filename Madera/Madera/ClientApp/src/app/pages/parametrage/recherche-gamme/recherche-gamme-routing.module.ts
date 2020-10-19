import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheGammePage } from './recherche-gamme.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheGammePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheGammePageRoutingModule {}
