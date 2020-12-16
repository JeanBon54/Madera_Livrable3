import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionPlanPage } from './gestion-plan.page';

const routes: Routes = [
  {
    path: '',
    component: GestionPlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionPlanPageRoutingModule {}
