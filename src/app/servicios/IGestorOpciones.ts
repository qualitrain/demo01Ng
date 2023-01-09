import { EventEmitter } from '@angular/core';

export abstract class IGestorOpcionesService{
    publicador:EventEmitter<string> = new EventEmitter();

    abstract getNombreBoton():string;

    abstract getNombresOpciones():string[];

    abstract getLinks():string[];

    publicar(eleccion:string):void{
        this.publicador.emit(eleccion);
    }

}