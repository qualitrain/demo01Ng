import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IPersona } from '../negocio/ipersona';
import { IServDatPersonasHttp } from './iservDatPersonasHttp';

@Injectable({
  providedIn: 'root'
})
export class ProvDatPersonahttpService implements IServDatPersonasHttp {
  uriPer:string;
  personasErr:IPersona[] = [{idPersona:-1,apPaterno:"",apMaterno:"",nombres:"",fechaNacAAAAMMDD:""}];

  constructor(private http: HttpClient) {
    this.uriPer = "http://localhost:8080/ServidorParaAjax/personas";
   }
    getPersona(id: number): Observable<IPersona> {
      console.log("ProvDatPersonahttpService.getPersona(" + id + ")");
     return this.http.get<IPersona>(this.uriPer + "/" + id)
                .pipe(
                  catchError((err,caught) => {
                              return this.procesarErrorItem(err,caught)
                            })  
                );
   }

  getPersonas(): Observable<IPersona[]> {
     console.log("ProvDatPersonahttpService.getPersonas()");
     return this.http.get<IPersona[]>(this.uriPer)
                .pipe(
                  catchError((err,caught) => {
                              return this.procesarError(err,caught)
                            })  
                );
  }
  private procesarError(error:any, caught:Observable<IPersona[]>){
    this.personasErr[0].nombres=error.message; 
    return of(this.personasErr);
  }
  private procesarErrorItem(error:any, caught:Observable<IPersona>){
    this.personasErr[0].nombres=error.message; 
    return of(this.personasErr[0]);
  }
}
