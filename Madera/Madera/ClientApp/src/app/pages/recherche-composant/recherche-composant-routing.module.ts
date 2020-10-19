import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheComposantPage } from './recherche-composant.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheComposantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheComposantPageRoutingModule {}
