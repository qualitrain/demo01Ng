import { Injectable, EventEmitter } from '@angular/core';
import { IGestorOpcionesService } from './IGestorOpciones';

@Injectable({
    providedIn: 'root'
})
export class GestorOpcionesAnimalService extends IGestorOpcionesService{
    nombreBoton:string="Animal";
    opciones:string[]=["Perro","Tigre","Rinoceronte","Canguro","Ajolote"];
    linksOpciones:string[]=["#","#","#","#","#"];

    static nInstancias=0;
    getNinstancia(): number {
        return GestorOpcionesAnimalService.nInstancias;
    }
    constructor(){  
        super();
        GestorOpcionesAnimalService.nInstancias++;
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