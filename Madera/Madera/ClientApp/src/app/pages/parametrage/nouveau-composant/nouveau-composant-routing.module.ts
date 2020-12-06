import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpBackend, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from './../../../../Shared/login-interceptor.service';

import { NouveauComposantPage } from './nouveau-composant.page';

const routes: Routes = [
  {
    path: '',
    component: NouveauComposantPage
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
export class NouveauComposantPageRoutingModule {}
