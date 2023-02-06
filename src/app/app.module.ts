import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PublicRoutingModule } from './public/public-routing.module';
import { PublicModule } from './public/public.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthConfigModule } from './core/auth/auth-config.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PublicRoutingModule,
    HttpClientModule,
    AuthConfigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }