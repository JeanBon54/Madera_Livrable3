import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouvelleFamilleComposantPage } from './nouvelle-famille-composant.page';

const routes: Routes = [
  {
    path: '',
    component: NouvelleFamilleComposantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouvelleFamilleComposantPageRoutingModule {}
