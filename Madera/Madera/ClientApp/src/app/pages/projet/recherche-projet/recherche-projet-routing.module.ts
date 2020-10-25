import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RechercheProjetPage } from './recherche-projet.page';

const routes: Routes  = [
  {
    path: '',
    component: RechercheProjetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheProjetPageRoutingModule {}
