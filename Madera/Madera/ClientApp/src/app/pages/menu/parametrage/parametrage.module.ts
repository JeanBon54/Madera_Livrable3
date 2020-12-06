import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ParametragePageRoutingModule } from './parametrage-routing.module';
import { ParametragePage } from './parametrage.page';

import { HttpBackend, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from './../../../../Shared/login-interceptor.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParametragePageRoutingModule
  ],
  declarations: [ParametragePage]
})
export class ParametragePageModule {}
