
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  inicionavbar="Inicio";
imagenUrl:string="/assets/Elitlogo1.png";
menucursos=[{link:"#", nombre:"Ilustrator para principiantes"},
    {link:"#", nombre:"Modelado básico en 3D"},{link:"#", nombre:"Fotografía de 0 a Pro"},
    {link:"#", nombre:"Programación para niños Scratch"}];

    mostrarcurso(curso:any){
        alert("Has elegido el siguiente curso "+ curso.nombre)
    }
    // Variable para controlar si la barra de navegación debe ser pegajosa
    isNavbarSticky: boolean = false;


    // Método que se llama cuando ocurre el evento de scroll
    @HostListener('window:scroll', ['$event'])
    onScroll(event: Event): void {
        // Ajustar el valor de isNavbarSticky según la posición de scroll
        this.isNavbarSticky = window.scrollY > 0;
    }

    mostrarMensaje(): void {
        window.alert("Estamos en construcción");
    }

    comprasPendientes: boolean = false;

    mostrarMensajeCarrito(): void {
        window.alert("Tienes compras pendientes");
        // También puedes realizar otras acciones relacionadas con el carrito aquí
    }

}

