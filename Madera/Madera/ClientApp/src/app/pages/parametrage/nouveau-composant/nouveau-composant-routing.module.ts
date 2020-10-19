import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouveauComposantPage } from './nouveau-composant.page';

const routes: Routes = [
  {
    path: '',
    component: NouveauComposantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouveauComposantPageRoutingModule {}
