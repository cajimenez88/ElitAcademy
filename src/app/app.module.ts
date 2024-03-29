import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {NgOptimizedImage} from "@angular/common";
import { BannerPrincipalComponent } from './banner-principal/banner-principal.component';
import { CardTituloComponent } from './card-titulo/card-titulo.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerPrincipalComponent,
    CardTituloComponent,
    FooterComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
