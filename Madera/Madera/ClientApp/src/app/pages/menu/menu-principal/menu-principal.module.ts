import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuPrincipalPageRoutingModule } from './menu-principal-routing.module';
import { MenuPrincipalPage } from './menu-principal.page';
import { CommercialWebService } from './../../../webServices/commercial-web-service.service'; 

import { HttpBackend, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from './../../../../Shared/login-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPrincipalPageRoutingModule
  ],
  declarations: [MenuPrincipalPage],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true 
    },
    CommercialWebService
  ]
})
export class MenuPrincipalPageModule {}
