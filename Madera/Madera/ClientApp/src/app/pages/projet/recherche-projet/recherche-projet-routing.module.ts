import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RechercheProjetPage } from './recherche-projet.page';
import { HttpBackend, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from './../../../../Shared/login-interceptor.service';

const routes: Routes  = [
  {
    path: '',
    component: RechercheProjetPage
  }
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
export class RechercheProjetPageRoutingModule {}
