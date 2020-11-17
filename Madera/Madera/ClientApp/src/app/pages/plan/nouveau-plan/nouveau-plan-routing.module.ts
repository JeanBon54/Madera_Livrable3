import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouveauPlanPage } from './nouveau-plan.page';

const routes: Routes = [
  {
    path: '',
    component: NouveauPlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouveauPlanPageRoutingModule {}
