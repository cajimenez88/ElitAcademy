import { Component } from '@angular/core';

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
}
