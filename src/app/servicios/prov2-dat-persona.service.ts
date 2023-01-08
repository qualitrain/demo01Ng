import { Injectable, EventEmitter } from '@angular/core';
import { IPersona } from '../negocio/ipersona';
import { IServDatPersonas } from './iservDatPersonas';

@Injectable({
  providedIn: 'root'
})
export class Prov2DatPersonasService implements IServDatPersonas{
  static nInstancias:number=0;
  personas:IPersona[]=[];
  nInstancia:number=0;
  notificador:EventEmitter<IPersona>=new EventEmitter();

  constructor() {
    console.log("Prov2DatPersonasService.constructor()");
    this.personas= [
      {idPersona:1001, apPaterno:'Lora',apMaterno:'Jara',nombres:'Norma Nora',fechaNacAAAAMMDD:'1999-03-17'},
      {idPersona:1002, apPaterno:'Mora',apMaterno:'Romo',nombres:'Fernando',fechaNacAAAAMMDD:'1999-07-12'},
      /*
      {idPersona:1003, apPaterno:'Reza',apMaterno:'Lira',nombres:'Juana Mariana',fechaNacAAAAMMDD:'1998-05-06'},
      {idPersona:1004, apPaterno:'Peza',apMaterno:'Sosa',nombres:'Octavio Alberto',fechaNacAAAAMMDD:'2000-01-07'},
      {idPersona:1005, apPaterno:'Arbeloa',apMaterno:'Zamora',nombres:'Mireya',fechaNacAAAAMMDD:'2000-09-09'},
      {idPersona:1020, apPaterno:'López',apMaterno:'Vera',nombres:'Miguel',fechaNacAAAAMMDD:'2001-01-05'},
      */
      {idPersona:1031, apPaterno:'Jaramillo',apMaterno:'Estera',nombres:'Tania',fechaNacAAAAMMDD:'2000-01-30'},
      {idPersona:1024, apPaterno:'Cervantes',apMaterno:'Garro',nombres:'Gustavo',fechaNacAAAAMMDD:'1999-06-05'},
      {idPersona:1036, apPaterno:'Ortega',apMaterno:'Hinojosa',nombres:'Ofelia',fechaNacAAAAMMDD:'2000-01-02'},
      {idPersona:1200, apPaterno:'Corte',apMaterno:'Ibarra',nombres:'Carlos Eduardo',fechaNacAAAAMMDD:'2001-02-21'}
    ];

    Prov2DatPersonasService.nInstancias++;
    this.nInstancia = Prov2DatPersonasService.nInstancias;
   }

   get IdInstancia():number {
     return this.nInstancia; 
   }

  getPersonas():IPersona[]{
    return this.personas;
  }
  getPersona(id: number): IPersona | undefined {
    return this.personas.find( (pI,i,o) => pI.idPersona === id ? true : false ) ;
  }
  eliminarPersona(persona:IPersona): IPersona | undefined {
    let i:number = this.personas.indexOf(persona);
    if (i===-1)
        return undefined;
    this.personas.splice(i,1);
    this.publicarBaja(persona);
    return persona;
  }
  publicarBaja(persona:IPersona){
    this.notificador.emit(persona);
  }

}
