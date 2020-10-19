import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouveauModulePage } from './nouveau-module.page';

const routes: Routes = [
  {
    path: '',
    component: NouveauModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouveauModulePageRoutingModule {}
