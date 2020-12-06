import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionProjetPage } from '../gestion-projet/gestion-projet.page';
import { HttpBackend, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from './../../../../Shared/login-interceptor.service';

import { NouveauProjetPage } from './nouveau-projet.page';

const routes: Routes = [
  { path: '', component: NouveauProjetPage },
  { path: 'projet/:id', component: GestionProjetPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true 
    }
  ]
})
export class NouveauProjetPageRoutingModule {}
