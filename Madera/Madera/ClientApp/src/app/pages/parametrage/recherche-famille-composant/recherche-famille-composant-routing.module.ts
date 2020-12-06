import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpBackend, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from './../../../../Shared/login-interceptor.service';

import { RechercheFamilleComposantPage } from './recherche-famille-composant.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheFamilleComposantPage
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
export class RechercheFamilleComposantPageRoutingModule {}
