import { Injectable, EventEmitter } from '@angular/core';
import { IGestorOpcionesService } from './IGestorOpciones';

@Injectable({
    providedIn: 'root'
})
export class GestorOpcionesDemoIDService extends IGestorOpcionesService{
    nombreBoton:string="Inyección de Dependencia";
    opciones:string[]=["Conceptos Básicos","Jerarquía de Inyección","Como motor de coreografía","Personalización"];
    linksOpciones:string[]=["#InDep01","#InDep02","#InDep03","#InDep04"];

    constructor(){  
        super();
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