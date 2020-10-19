import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouvelleGammePage } from './nouvelle-gamme.page';

const routes: Routes = [
  {
    path: '',
    component: NouvelleGammePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouvelleGammePageRoutingModule {}
