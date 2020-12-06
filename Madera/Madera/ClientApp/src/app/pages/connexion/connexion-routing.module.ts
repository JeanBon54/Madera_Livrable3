import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionService } from 'src/app/WebServices/connexion.service';

import { ConnexionPage } from './connexion.page';

const routes: Routes = [
  {
    path: '',
    component: ConnexionPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule ],
  exports: [RouterModule],
  providers: [ConnexionService]
})
export class ConnexionPageRoutingModule {}
