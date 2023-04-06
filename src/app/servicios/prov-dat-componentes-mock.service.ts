import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComponente } from './IComponente';

@Injectable({
  providedIn: 'root'
})
export class ProvDatComponentesMockService {
  listaComponentes:IComponente[]=[];

  constructor() { 
    this.listaComponentes = this.getListaComponentes();
  }

  getComponente(id:string):Observable<IComponente>{
    let componenteResultado:IComponente|null = null;
    let componentesLeidos = this.listaComponentes
                                .filter(compI=>compI.demo === id);
    if (componentesLeidos.length === 1){
      componenteResultado = componentesLeidos[0];
    }
    let obsLecturaXIDLenta:Observable<IComponente> = new Observable(
        (obs) => {
          setTimeout(() => obs.next(componenteResultado!), 800);
        }
    )
    return obsLecturaXIDLenta;
  }

  updateComponente(compModificado:IComponente){
    let i = this.listaComponentes
                .findIndex( (elemI) => elemI.demo === compModificado.demo);
     if( i !== -1){
      this.listaComponentes[i].descripcion = compModificado.descripcion;
      this.listaComponentes[i].titulo = compModificado.titulo;
    }
  }

  getComponentesTodos():Observable<IComponente[]>{
    let obsLecturaLenta:Observable<IComponente[]> = new Observable(
        (obs) => {
          setTimeout(() => obs.next(this.listaComponentes), 800);
        }
    )
    return obsLecturaLenta;
  }

  getListaComponentes(){
    return [
      { 
        demo:'test-rxjs01', 
        titulo:'Introduccion a los observables y RxJs', 
        descripcion:'Se genera una suscripción sobre un observable.' 
        + ' La suscripción cuenta los clicks. El contador se muestra ' 
        + 'en el componente.'
      },
      { 
        demo:'test-rxjs02', 
        titulo:'Funciones básicas de Creación de Observables (Adaptadores)', 
        descripcion:"Los botones 'Hacer click' y 'Limpiar' tienen su observable que 'escucha' los clicks." 
        + " Hay un observable, creado con interval, que genera pulsos numéricos (en secuencia) cada 1500 milisegundos."
        + ' Hay diversas suscripciones procesando los valor emitidos de distintos modos.'
      },
      { 
        demo:'test-rxjs03', 
        titulo:'Función bindCallback', 
        descripcion:"Este ejemplo muestra como envolver una función asíncrona dentro de otra que devuelve observables." 
        + " Se envuelve, en un proxy, una función asíncrona que devuelve un número aleatorio."
        + ' El callback agrega una insignia a la vista, conteniendo los resultados devueltos por cada invocación.'
      },
      {
        demo:'test-rxjs04', 
        titulo:'Pipeline en RxJs', 
        descripcion:"Este ejemplo muestra como usar los operadores de RxJs." 
        + " Se crea una tubería de procesamiento (pipe) a partir del observable."
        + ' Usa los operadores map, filter y tap.'
      }

    ];
  }

}
