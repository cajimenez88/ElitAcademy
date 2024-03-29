import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { NgOptimizedImage } from "@angular/common";
import { BannerPrincipalComponent } from './banner-principal/banner-principal.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            ListaComponent,
            BannerPrincipalComponent,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            NgOptimizedImage
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map