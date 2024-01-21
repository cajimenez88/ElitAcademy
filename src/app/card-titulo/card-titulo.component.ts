import { Component } from '@angular/core';

@Component({
  selector: 'app-card-titulo',
  templateUrl: './card-titulo.component.html',
  styleUrl: './card-titulo.component.css'
})
export class CardTituloComponent {
  
  muestrainformacion = "Cursos Disponibles";
  propertyBinding = '25px';


  // Función para mostrar el contenido correspondiente al hacer clic en "Más información"
  mostrarContenido(id: string): void {
    // Ocultar el contenido principal
    const contenidoPrincipal = document.getElementById('card');
    if (contenidoPrincipal) {
      contenidoPrincipal.style.display = 'none';
    }

    // Ocultar todos los contenedores de contenido
    this.ocultarTodosContenidos();

    // Mostrar el contenido del ID específico
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.style.display = 'block';
    }
  }

  // Función para regresar al contenido principal
  regresar(): void {
    // Mostrar el contenido principal
    const contenidoPrincipal = document.getElementById('card');
    if (contenidoPrincipal) {
      contenidoPrincipal.style.display = 'block';
    }

    // Ocultar todos los contenedores de contenido adicional
    this.ocultarTodosContenidos();
  }

  // Función para iniciar el proceso de compra
  iniciarProcesoCompra(): void {
    // Mostrar mensaje de compra en proceso
    alert('Su compra está en proceso');
  }

  // Función para ocultar todos los contenedores de contenido
  ocultarTodosContenidos(): void {
    const contenedores = ['home1', 'home2', 'home3', 'home4'];
    contenedores.forEach(id => {
      if (id !== 'card') {
        const elemento = document.getElementById(id);
        if (elemento) {
          elemento.style.display = 'none';
        }
      }
    });
  }

}

