import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheFamilleComposantPage } from './recherche-famille-composant.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheFamilleComposantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheFamilleComposantPageRoutingModule {}
