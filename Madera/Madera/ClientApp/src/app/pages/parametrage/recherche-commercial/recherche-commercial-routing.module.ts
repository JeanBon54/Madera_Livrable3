import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RechercheCommercialPage } from './recherche-commercial.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheCommercialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheCommercialPageRoutingModule {}
