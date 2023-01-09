import { Injectable, EventEmitter } from '@angular/core';
import { IGestorOpcionesService } from './IGestorOpciones';
import { GestorOpcionesLibroService } from './GestorOpcionesLibro.service';

@Injectable({
    providedIn: 'root'
})
export class GestorOpcionesDemoIDService extends IGestorOpcionesService{
    static nInstancias=0;
    getNinstancia(): number {
        return GestorOpcionesDemoIDService.nInstancias;
    }
    nombreBoton:string="Inyección de Dependencia";
    opciones:string[]=["Conceptos Básicos","Jerarquía de Inyección","Como motor de coreografía","Personalización"];
    linksOpciones:string[]=["#InDep01","#InDep02","#InDep03","#InDep04"];

    constructor(){  
        super();
        GestorOpcionesDemoIDService.nInstancias++;
     }
    getNombreBoton():string{
        return this.nombreBoton;
    }
    getNombresOpciones():string[]{
        return this.opciones;
    }
    getLinks():string[]{
        return this.linksOpciones;
    }

}