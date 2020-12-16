import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionModelisationPage } from './gestion-modelisation.page';

const routes: Routes = [
  {
    path: '',
    component: GestionModelisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionModelisationPageRoutingModule {}
