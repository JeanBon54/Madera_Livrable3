import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheClientPage } from './recherche-client.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheClientPageRoutingModule {}
