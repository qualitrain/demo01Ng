import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  autenticado:boolean = false;
  static nInstacias:number = 0;

  notificador:EventEmitter<boolean> = new EventEmitter();

  constructor() { 
    console.log("AutenticacionService.constructor()");
    AutenticacionService.nInstacias++;
    console.log("AutenticacionService.nInstacias:" + AutenticacionService.nInstacias);
  }

  yaAutenticado(){
    return this.autenticado;
  }
  crearSesion(){
    this.autenticado = true;
    this.notificador.emit(this.autenticado);
  }
  terminarSesion(){
    this.autenticado = false;
    this.notificador.emit(this.autenticado);   
  }
}
