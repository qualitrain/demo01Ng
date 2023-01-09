import { Component } from '@angular/core';
import { IGestorOpcionesService } from '../servicios/IGestorOpciones';
import { GestorOpcionesAnimalService } from '../servicios/GestorOpcionesAnimal.service';
import { GestorOpcionesDemoIDService } from '../servicios/GestorOpcionesDemoID.service';
import { GestorOpcionesLibroService } from '../servicios/GestorOpcionesLibro.service';

@Component({
  selector: 'app-caja-demo-host',
  templateUrl: './caja-demo-host.component.html',
  styleUrls: ['./caja-demo-host.component.css'],
  providers:[ 
    { provide:GestorOpcionesDemoIDService, useClass:GestorOpcionesAnimalService },
  ]
})
export class CajaDemoHostComponent {

}