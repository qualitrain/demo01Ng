import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPerro } from '../negocio/iperro';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { IErrorApiPerrera } from './ierrorApiPerrera';

@Injectable({
  providedIn: 'root'
})
export class ProvDatPerrosService {
  uriPerro:string  ="http://localhost:8080/ServidorParaAjax/Perrera/Perro/";
  uriErronea:string="http://localhost:8080/ServidorParaAjax/Perrera/Perro/1A";

  constructor(private http:HttpClient) { }

  getPerro(id:number):Observable<HttpResponse<IPerro>>{
    return this.http.get<IPerro>(this.uriPerro + id, {observe:'response'});
  }
  getPerroPlus(id:number):Observable<IPerro>{
    return this.http.get<IPerro>(this.uriPerro + id, {observe:'body'}).pipe(
      tap({
        next: datos => console.log(datos),
        error: error => console.error(error),
        complete: () => console.log("Fin:" )
      }),
      catchError( this.manejarError )
    );
  }

  testGetPerroErroneo():Observable<HttpResponse<IPerro>>{
    return this.http.get<IPerro>(this.uriErronea, {observe:'response'}).pipe(
      tap({
        next: datos => console.log(datos),
        error: error => console.error(error),
        complete: () => console.log("Fin:" )
      }),
      catchError( this.manejarError )
    );
  }

  manejarError(error: HttpErrorResponse) {
    let objError:IErrorApiPerrera;
    if(error.status === 0){
      console.error('Error en conexión:', error.error);
      objError = { status:error.status,
                   mensaje:'Error en conexión:' + error.error,
                   excepcion:'',
                   excepcionAnidada:'',
                   uri:error?.url ? error?.url :''}
    }
    else{
      console.error('Error devuelto por el servidor ' 
                   + error.message + "\n "
                   + 'status:' + error.status 
                   + error.error) 
      objError = error.error; 
      objError.status = error.status;        
    }
    return throwError(() => objError);
  }


}
