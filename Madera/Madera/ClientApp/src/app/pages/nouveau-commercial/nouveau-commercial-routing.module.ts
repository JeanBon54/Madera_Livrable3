import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouveauCommercialPage } from './nouveau-commercial.page';

const routes: Routes = [
  {
    path: '',
    component: NouveauCommercialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouveauCommercialPageRoutingModule {}
