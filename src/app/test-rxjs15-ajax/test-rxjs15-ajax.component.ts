import { Component, OnInit , AfterViewInit } from '@angular/core';
import { catchError, concatMap, debounceTime, filter, fromEvent, map, retry, tap, throwError } from 'rxjs';
import { ajax, AjaxError } from "rxjs/ajax";

const URI_PERRO =       "http://localhost:8080/ServidorParaAjax/Perrera/Perro?id=";
const URI_PROPIETARIO = "http://localhost:8080/ServidorParaAjax/Perrera/Persona?id=";
const URI_DOMICILIO =   "http://localhost:8080/ServidorParaAjax/Perrera/Domicilio?id=";

interface IDomicilio{
  idPersona:number;
  calle:string;
  numExt:string;
  numInt:string;
  colonia:string;
  delMunicipio:string;
  estado:string;
}
interface IPersona{
  idPersona:number,
  nombre:string,
  apellidoPaterno:string,
  apellidoMaterno:string,
}

interface IPerro{
  id:number,
  nombre:string,
  raza:string,
  edad:number,
  idPropietario:number
}

@Component({
  selector: 'app-test-rxjs15-ajax',
  templateUrl: './test-rxjs15-ajax.component.html',
  styleUrls: ['./test-rxjs15-ajax.component.css']
})
export class TestRxjs15AjaxComponent implements OnInit , AfterViewInit{
  inpId?:HTMLInputElement;
  idInpId:string=""

  perroId:string="";
  perroNombre:string="";
  perroRaza:string="";
  perroEdad:string="";
  perroError:string="";

  perId:string="";
  perNombre:string="";
  perApPaterno:string="";
  perApMaterno:string=""; 

  domCalle:string="";
  domNumExt:string="";
  domNumInt:string="";
  domColonia:string="";

  errorAjax:string="";

  ngOnInit(): void {
    this.idInpId = "inpId" + Math.trunc(Math.random() * 1000);
  }
  ngAfterViewInit(): void {
    this.inpId = document.getElementById(this.idInpId) as HTMLInputElement;
    fromEvent(this.inpId,"change").pipe(
              debounceTime(300),
              map ( (evt:Event) => evt.target as HTMLInputElement),
              map ( elem => elem.value)
           ).subscribe(id => this.getPerroDesdeBackEnd(id))
  }
  getPerroDesdeBackEnd(idPerro:string){
    this.deshabilitarBotonId();
    this.limpiarSeccionPerro();
    this.limpiarSeccionPersona(); 
    this.limpiarSeccionDomicilio();
    /* ok */  //  this.lectorRxjsAjax(idPerro);
    /* ok */  //  this.lectorRxjsAjax2(idPerro);
  
    /* ok */  // this.lectorRxjsAjaxTimeout(idPerro);
    /* ok */  // this.lectorRxjsAjaxTimeoutB(idPerro);
    /* ok */   this.lectorRxjsAjaxTimeoutC(idPerro);
    /* ok */  // this.lectorRxjsAjaxTimeoutD(idPerro);
  }
  limpiarSeccionPerro(){
    this.perroId="";
    this.perroNombre="";
    this.perroRaza="";
    this.perroEdad="";
    this.perroError="";
    this.errorAjax="";
  }
  limpiarSeccionPersona(){
    this.perId="";
    this.perNombre="";
    this.perApPaterno="";
    this.perApMaterno="";
  }
  limpiarSeccionDomicilio(){
    this.domCalle = "";
    this.domNumExt= "";
    this.domNumInt= "";
    this.domColonia="";				
  }
  lectorRxjsAjax(idPerro:string){     // Manejo de errores mayormente en la definición del observable y menormente en la suscripción. 
    // Anidación resuelta en la definición del observable. Uso de concatmap para anidar llamadas asíncronas
    // Se filtran los resultados inválidos para que no se haga una llamada ajax sobre un dato que no existe (2023)
    // revisado 2023-01-18

    const getPerroConPropietarioYdomicilio$ = 
          ajax.getJSON( URI_PERRO + idPerro ).pipe(
                catchError( err => { throw this.generarObjetoErrorAjax(err, URI_PERRO, idPerro, 'perro') }),
                tap (   perro => !perro ? this.reportarPerroNoEncontrado() : "" ), // Si no existe el perro, avisar
                filter( perro => !!perro ), // Procesar solo perros que sí existan
                tap (   perro => this.actualizarSeccionPerro(perro as IPerro)), //mostrar datos del perro
                map (   perro => (perro as IPerro).idPropietario ),
                filter( idPersona => !!idPersona ), // id Persona tiene valor: no es undefined o null
                concatMap(idPersona => ajax.getJSON( URI_PROPIETARIO + idPersona).pipe(
                    catchError( err => { throw this.generarObjetoErrorAjax(err, URI_PROPIETARIO, idPersona+"", 'persona')}  ),
                    filter( persona => !!persona),
                    tap(    persona => this.actualizarSeccionPersona(persona as IPersona) ),
                    concatMap(  persona => ajax.getJSON ( URI_DOMICILIO + (persona as IPersona).idPersona ).pipe(
                        catchError( err =>{ throw this.generarObjetoErrorAjax(err, URI_DOMICILIO, 
                                                                  (persona as IPersona).idPersona+"", 'domicilio')} ),
                        filter(domicilio => !!domicilio),
                        tap   (domicilio => this.actualizarSeccionDomicilio(domicilio as IDomicilio))
                    ))
                ))
        );

    getPerroConPropietarioYdomicilio$.subscribe(
                    {
                      next: x=> this.habilitarBotonId(),
                      error:err=>{
                            this.procesarErrorEnPeticionHttp(err)
                            this.habilitarBotonId();
                        }
                    });
  }
  lectorRxjsAjax2(idPerro:string){     // Versión factorizada de lectorRxjsAjax
    const getPerroConPropietarioYdomicilio$ = 
          ajax.getJSON( URI_PERRO + idPerro ).pipe(
                catchError( err => { throw this.generarObjetoErrorAjax(err, URI_PERRO, idPerro, 'perro') }),
                tap (   perro => !perro ? this.reportarPerroNoEncontrado() : "" ), // Si no existe el perro, avisar
                filter( perro => !!perro ), // Procesar solo perros que sí existan
                tap (   perro => this.actualizarSeccionPerro(perro as IPerro)), //mostrar datos del perro
                map (   perro => (perro as IPerro).idPropietario ),
                filter( idPersona => !!idPersona ), // id Persona tiene valor: no es undefined o null
                concatMap(idPersona => this.getAjax_GET_PersonaConDomicilio$(idPersona+""))
        );

    getPerroConPropietarioYdomicilio$.subscribe(
                    {
                      next: x=> this.habilitarBotonId(),
                      error:err=>{
                            this.procesarErrorEnPeticionHttp(err)
                            this.habilitarBotonId();
                        }
                    });
  }

  getAjax_GET_PersonaConDomicilio$(idPersona:string){
     return ajax.getJSON( URI_PROPIETARIO + idPersona).pipe(
      catchError( err => { throw this.generarObjetoErrorAjax(err, URI_PROPIETARIO, idPersona, 'persona')}  ),
      filter( persona => !!persona),
      tap(    persona => this.actualizarSeccionPersona(persona as IPersona) ),
      concatMap(  persona => this.getAjax_GET_Domicilo$(persona as IPersona))
    )
  }

  getAjax_GET_Domicilo$(persona:IPersona){
    return ajax.getJSON ( URI_DOMICILIO + persona.idPersona ).pipe(
      catchError( err =>{ throw this.generarObjetoErrorAjax(err, URI_DOMICILIO, 
                                                persona.idPersona+"", 'domicilio')} ),
      filter(domicilio => !!domicilio),
      tap   (domicilio => this.actualizarSeccionDomicilio(domicilio as IDomicilio))
    );
  }

  lectorRxjsAjaxTimeout(idPerro:string){ //Similar a lectorRxjsAjax(id), pero agrega timeouts a las invocaciones para hacer testing exhaustivo
    const getPerroConPropietarioYdomicilio$ = this.GETAjaxTimeOut$(URI_PERRO, idPerro, 2000).pipe(
        catchError( err => this.generarObjetoErrorAjax(err, URI_PERRO, idPerro, 'perro') ),
        tap( perro => {
            if (!perro)
                this.reportarPerroNoEncontrado();
        }),
        filter(perro => !!perro), // Perro distinto de nulo o undefined 
        tap (  perro => this.actualizarSeccionPerro(perro as IPerro)),
        map (  perro =>  (perro as IPerro).idPropietario ),
        concatMap(id => this.GETAjaxTimeOut$( URI_PROPIETARIO, id+"", 1500).pipe(
            catchError( err => this.generarObjetoErrorAjax(err, URI_PROPIETARIO, id+"", 'persona') ),
            filter( persona => !!persona), // Persona distinta de nulo o undefined 
            tap(    persona => this.actualizarSeccionPersona(persona as IPersona) ),
            concatMap( persona => this.GETAjaxTimeOut$ ( URI_DOMICILIO, (persona as IPersona).idPersona+"", 1000 ).pipe(
                catchError( err =>  this.generarObjetoErrorAjax(err, URI_DOMICILIO, (persona as IPersona).idPersona+"", 'domicilio') ),
                filter( domicilio => !!domicilio), // Persona distinta de nulo o undefined 
                tap (   domicilio => this.actualizarSeccionDomicilio(domicilio as IDomicilio) )
            )),
        ))
    );

    getPerroConPropietarioYdomicilio$.subscribe({
        next:idProp => console.log(idProp), 
        error:err => { 
          this.procesarErrorEnPeticionHttp(err);
          this.habilitarBotonId();
        },
        complete:() => this.habilitarBotonId()
      });
  }
  GETAjaxTimeOut$(uri:string,id:string,timeOut:number){ // Auxiliar para devolver observable que hace GET con ajax usando timeouts
    return ajax({
        url:uri + id,
        timeout:timeOut
    }).pipe(
        map(response => {
//            console.log("response.response:");
//            console.log(response.response);
            return response.response;
        })
    );
  }
  lectorRxjsAjaxTimeoutB(idPerro:string){ // Otro estilo: Resuelve la anidación de llamados y el manejo de errores en la suscripción 
    let este = this;

    const GET_Perro$ = this.GETAjaxTimeOut$(URI_PERRO, idPerro, 3000).pipe(
        catchError( err => { throw this.generarObjetoErrorAjax(err, URI_PERRO, idPerro, 'perro') }),
        tap(perro => perro ? "" : this.reportarPerroNoEncontrado()),
        filter(perro => !!perro),
        tap(   perro => this.actualizarSeccionPerro(perro as IPerro)  )
    );
      

    const GET_Persona$ = function(idPersona:string){
        return este.GETAjaxTimeOut$(URI_PROPIETARIO, idPersona, 1500).pipe(
          catchError( err => { throw este.generarObjetoErrorAjax(err, URI_PROPIETARIO, idPersona, 'persona')}  ),
            filter(persona => !!persona),
            tap(   persona => este.actualizarSeccionPersona(persona as IPersona)  )
        );
    }

    const GET_Domicilio$ = function(idPersona:string){
        return este.GETAjaxTimeOut$(URI_DOMICILIO, idPersona, 1000).pipe(
          catchError( err =>{ throw este.generarObjetoErrorAjax(err, URI_DOMICILIO, 
            idPersona, 'domicilio')} ),
          filter(domicilio => !!domicilio),
          tap(domicilio => este.actualizarSeccionDomicilio(domicilio as IDomicilio) )
        )
    }

    GET_Perro$
       .subscribe({
        next:perro => {
           GET_Persona$((perro as IPerro).idPropietario+"")
              .subscribe({
                next:persona => {
                    GET_Domicilio$((persona as IPersona).idPersona+"")
                        .subscribe({ 
                            next:dom => console.log( (perro as IPerro).nombre + ", " 
                                                    + (persona as IPersona).nombre + ", " 
                                                    + (dom as IDomicilio).calle),
                            error:err =>{
                                this.procesarErrorEnPeticionHttp(err);
                                this.habilitarBotonId();
                            }, 
                            complete:() => this.habilitarBotonId() 
                          });
                },
                error: err => {
                    this.procesarErrorEnPeticionHttp(err);
                    this.habilitarBotonId();
                }
              });
        },
        error:err => {
                this.procesarErrorEnPeticionHttp(err);
                this.habilitarBotonId();
               }
              });
  } 
  lectorRxjsAjaxTimeoutC(idPerro:string){ // lectorRxjsAjaxTimeoutB con reintentos usando operador retry 
    let este = this;
    const GET_Perro$ = this.GETAjaxTimeOut$(URI_PERRO, idPerro, 3000).pipe(
      catchError( err => { throw este.generarObjetoErrorAjax(err, URI_PERRO, idPerro, 'perro') }), //No reintenta
      tap(perro => perro ? "" : este.reportarPerroNoEncontrado()),
        filter(perro => !!perro),
        tap(   perro => este.actualizarSeccionPerro(perro as IPerro)  )
    );
        
    const GET_Persona$ = function(idPersona:string){
        return este.GETAjaxTimeOut$(URI_PROPIETARIO, idPersona, 1500).pipe(
            retry(2),
            filter(persona => !!persona),
            tap(   persona => este.actualizarSeccionPersona(persona as IPersona)  )
        );
    }

    const GET_Domicilio$ = function(idPersona:string){
        return este.GETAjaxTimeOut$(URI_DOMICILIO, idPersona, 1200).pipe(
            retry(3),
            filter(domicilio => !!domicilio),
            tap(domicilio => este.actualizarSeccionDomicilio(domicilio as IDomicilio) )
        )
    }

    GET_Perro$
       .subscribe({
        next:perro => {
           GET_Persona$((perro as IPerro).idPropietario+"")
              .subscribe({
                next:persona => {
                    GET_Domicilio$((persona as IPersona).idPersona+"")
                        .subscribe({ 
                            next:dom => console.log( (perro as IPerro).nombre + ", " 
                                                    + (persona as IPersona).nombre + ", "
                                                    + (dom as IDomicilio).calle),
                            error:err => {
                                this.informarError(err, URI_DOMICILIO + (persona as IPersona).idPersona);
                                this.habilitarBotonId();
                            } ,
                            complete:() => this.habilitarBotonId()
                          });
                },
                error:err =>{
                    this.informarError(err, URI_PROPIETARIO + (perro as IPerro).idPropietario)
                    this.habilitarBotonId();
                }
              });
        },
        error:err => {
            this.informarError(err, URI_PERRO + idPerro)
            this.habilitarBotonId();
        }
      });
  }
  lectorRxjsAjaxTimeoutD(idPerro:string){ // lectorRxjsAjaxTimeoutB con reintentos usando objeto config en retry

    const GET_Perro$ = this.GETAjaxTimeOut$(URI_PERRO, idPerro, 3000).pipe(
        tap(perro => perro ? "" : this.reportarPerroNoEncontrado()),
        filter(perro => !!perro),
        tap(   perro => this.actualizarSeccionPerro(perro as IPerro)  )
    );

    let este = this;
           
    const GET_Persona_retryWhen$ = function(idPersona:string){
      const MAX_INTENTOS = 3;
      const PAUSA = 2000;
      return este.GETAjaxTimeOut$(URI_PROPIETARIO, idPersona, 1100).pipe(
              retry({count: MAX_INTENTOS, delay: PAUSA}), 
              filter(persona => !!persona),
              tap(   persona => este.actualizarSeccionPersona(persona as IPersona)  )
        )
    }
      
    const GET_Domicilio$ = function(idPersona:string){
        return este.GETAjaxTimeOut$(URI_DOMICILIO, idPersona, 1200).pipe(
            retry(3),
            map(domicilio => {
                este.actualizarSeccionDomicilio(domicilio as IDomicilio);
                return domicilio;
            })
        )
    }
   
    GET_Perro$
      .subscribe({
        next:perro => {
            GET_Persona_retryWhen$((perro as IPerro).idPropietario+"")
              .subscribe({
                next:persona => {
                    GET_Domicilio$((persona as IPersona).idPersona+"")
                        .subscribe({ 
                            next:dom => console.log((perro as IPerro).nombre + ", " 
                                                  + (persona as IPersona).nombre + ", " 
                                                  + (dom as IDomicilio).calle),
                            error:err => {
                                this.informarError(err, URI_DOMICILIO + (persona as IPersona).idPersona);
                                this.habilitarBotonId();
                            },
                            complete:() =>this.habilitarBotonId() });
                },
                error:err =>{
                    tap (err => console.log("error en GET_Persona"));
                    this.informarError(err, URI_PROPIETARIO + (perro as IPerro).idPropietario);
                    this.habilitarBotonId();
                }
              });
        },
        error:err =>{
            this.reportarPerroNoEncontrado();
            this.informarError(err, URI_PROPIETARIO + idPerro);
            this.habilitarBotonId();
        }
      });
   }
   
  informarError(error:Error, uri:string){
    this.errorAjax = error.message + " en " + uri;
  }

  procesarErrorEnPeticionHttp(error:any){
    let mensajeError = "";
    if(error.err instanceof AjaxError){
      let errorAjax:AjaxError =error.err as AjaxError;
        if(errorAjax.status === 0 && errorAjax.message=="ajax error"){
          mensajeError="No fue posible hacer conexión con " + error.uri;
        }
        else{
          mensajeError="Error" + " (" + errorAjax.message + "). "
                     + "Http status " + errorAjax.status + " en " + error.uri; 
        }
    }
    else
    if(error.uri !== undefined)
      {
        mensajeError = "Error en " + error.uri + " : " + error.err.message;
      }
    else{
      mensajeError = "Error inesperado: " + error.message;
    }
    this.errorAjax = mensajeError;
  }
  generarObjetoErrorAjax(err:{uri:string}, uriParam:string, idParam:string, recursoParam:string){
  /*  if(err instanceof AjaxError){
      console.log(err);
      console.log(err.message);
      console.log(err.name);
      console.log(err.status);
    }
    */
    if(err.uri === undefined)
        throw ( { uri:uriParam + idParam, err:err, recurso:recursoParam} );
    else
        throw (err);
    return "";
  }
  reportarPerroNoEncontrado(){
    this.limpiarSeccionPerro();
    this.perroError = "No encontrado";
    this.habilitarBotonId();
  }
  actualizarSeccionPerro(perro:IPerro){
    this.perroId  = perro.id+"";
    this.perroNombre = perro.nombre;
    this.perroRaza = perro.raza;
    this.perroEdad = perro.edad > 0 ? perro.edad+"" : "";
    this.perroError = "";		
    this.errorAjax = "";		
  }
  actualizarSeccionPersona(persona:IPersona){
    console.log("actualizarSeccionPersona("+persona.idPersona + ", " + persona.nombre+")");
    this.perId = persona.idPersona+"";
    this.perNombre = persona.nombre;
    this.perApPaterno = persona.apellidoPaterno;
    this.perApMaterno = persona.apellidoMaterno;
  }
  actualizarSeccionDomicilio(domicilio:IDomicilio){
    this.domCalle = domicilio.calle;
    this.domNumExt= domicilio.numExt;
    this.domNumInt= domicilio.numInt;
    this.domColonia = domicilio.colonia;
  }
  habilitarBotonId(){
    if(this.inpId)
    this.inpId.disabled = false;
  }
  deshabilitarBotonId(){
    if(this.inpId)
      this.inpId.disabled = true;
  }
}
