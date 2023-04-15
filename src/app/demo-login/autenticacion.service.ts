import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private autenticado:boolean = false;
  static nInstacias:number = 0;

  notificador:EventEmitter<boolean> = new EventEmitter();

  constructor() { 
     AutenticacionService.nInstacias++;
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
