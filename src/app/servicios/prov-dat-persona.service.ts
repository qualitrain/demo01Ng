import { Injectable } from '@angular/core';
import { IPersona } from '../negocio/ipersona';
import { IServDatPersonas } from './iservDatPersonas';

@Injectable({
  providedIn: 'root'
})
export class ProvDatPersonasService implements IServDatPersonas{
  static nInstancias:number=0;
  personas:IPersona[]=[];
  nInstancia:number=0;

  constructor() {
    this.personas= [
      {idPersona:1, apPaterno:'Lora',apMaterno:'Jara',nombres:'Norma Nora',fechaNacAAAAMMDD:'1999-03-17'},
      {idPersona:2, apPaterno:'Mora',apMaterno:'Romo',nombres:'Fernando',fechaNacAAAAMMDD:'1999-07-12'},
      {idPersona:3, apPaterno:'Reza',apMaterno:'Lira',nombres:'Juana Mariana',fechaNacAAAAMMDD:'1998-05-06'},
      {idPersona:4, apPaterno:'Peza',apMaterno:'Sosa',nombres:'Octavio Alberto',fechaNacAAAAMMDD:'2000-00-07'},
      {idPersona:5, apPaterno:'Arbeloa',apMaterno:'Zamora',nombres:'Mireya',fechaNacAAAAMMDD:'2000-09-09'},
      {idPersona:20, apPaterno:'López',apMaterno:'Vera',nombres:'Miguel',fechaNacAAAAMMDD:'2001-00-05'},
      {idPersona:31, apPaterno:'Jaramillo',apMaterno:'Estera',nombres:'Tania',fechaNacAAAAMMDD:'2000-01-30'},
      {idPersona:24, apPaterno:'Cervantes',apMaterno:'Garro',nombres:'Gustavo',fechaNacAAAAMMDD:'1999-06-05'},
      {idPersona:36, apPaterno:'Ortega',apMaterno:'Hinojosa',nombres:'Ofelia',fechaNacAAAAMMDD:'2000-01-02'},
      {idPersona:200, apPaterno:'Corte',apMaterno:'Ibarra',nombres:'Carlos Eduardo',fechaNacAAAAMMDD:'2001-02-21'}
    ];

    ProvDatPersonasService.nInstancias++;
    this.nInstancia = ProvDatPersonasService.nInstancias;
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
    return persona;
  }
}
