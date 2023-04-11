import { Component } from '@angular/core';
import { GestorOpcionesAnimalService } from 'src/app/servicios/GestorOpcionesAnimal.service';
import { GestorOpcionesDemoIDService } from 'src/app/servicios/GestorOpcionesDemoID.service';
import { GestorOpcionesLibroService } from 'src/app/servicios/GestorOpcionesLibro.service';

@Component({
  selector: 'app-caja-demo-host-id',
  templateUrl: './caja-demo-host-id.component.html',
  styleUrls: ['./caja-demo-host-id.component.css'],
  providers:[ 
    { provide:GestorOpcionesDemoIDService, useClass:GestorOpcionesAnimalService },
  ],
  viewProviders:[ 
    { provide:GestorOpcionesDemoIDService, useClass:GestorOpcionesLibroService },
  ]

})
export class CajaDemoHostIDComponent {

}