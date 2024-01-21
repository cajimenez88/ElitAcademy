import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardTituloComponent } from './card-titulo/card-titulo.component';

const routes: Routes = [
  // Otras rutas pueden ir aquí
  { path: 'card-titulo', component: CardTituloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

