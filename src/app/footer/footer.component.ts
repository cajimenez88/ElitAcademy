import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  botonregistro= 'Enviar';
  titulo='Regístrate aquí';
  mensaje='Registrado'

mostrarmensaje(){
    alert(this.mensaje)
}

  }

