import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheModulePage } from './recherche-module.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheModulePageRoutingModule {}
