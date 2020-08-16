import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CLientsPage } from './clients.page';

const routes: Routes = [
  {
    path: '',
    component: CLientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CLientsPageRoutingModule {}
