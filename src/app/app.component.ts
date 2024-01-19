import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'miangular2';
  cursos=[{nombre:"curso1",descripcion:"descripcion curso1",imagen:"/assets/IMAGEN-1.png"},
    {nombre:"curso1",descripcion:"descripcion curso1",imagen:"/assets/IMAGEN-1.png"},
    {nombre:"curso1",descripcion:"descripcion curso1",imagen:"/assets/IMAGEN-1.png"},
    {nombre:"curso1",descripcion:"descripcion curso1",imagen:"/assets/IMAGEN-1.png"}
  ]

  constructor(){
    this.title="Mi angular 2 ";
    console.log("constructor de appcomponent");
  }

  ngOnInit(){
    console.log("ngoninit de appcomponent");
  }
}
