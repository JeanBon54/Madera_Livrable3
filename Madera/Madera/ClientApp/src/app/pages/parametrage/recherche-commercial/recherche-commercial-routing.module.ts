import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RechercheCommercialPage } from './recherche-commercial.page';
import { HttpBackend, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from './../../../../Shared/login-interceptor.service';

const routes: Routes = [
  {
    path: '',
    component: RechercheCommercialPage
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
export class RechercheCommercialPageRoutingModule {}
