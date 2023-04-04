import { Component, AfterViewChecked} from '@angular/core';
import { concat, from, iif, interval, map, merge, of, take, takeUntil, tap, timer, toArray } from 'rxjs';
import { ConsolaHtml } from '../../servicios/consolaHtml'

@Component({
  selector: 'app-test-rxjs05',
  templateUrl: './test-rxjs05.component.html',
  styleUrls: ['./test-rxjs05.component.css']
})
export class TestRxjs05Component implements AfterViewChecked{
  divResultados:HTMLElement|undefined=undefined;

  mostrarOf:boolean=false;
  mostrarFrom:boolean=false;
  mostrarIif:boolean=false;
  mostrarTimer:boolean=false;
  mostrarMerge:boolean=false;
  mostrarConcat:boolean=false;

  mostrarDescripcion=true;
  mostrarCodigo=true;
  mostrarEjecucion=true;

  constructor(private consola:ConsolaHtml){}

  ngAfterViewChecked(): void {
    this.consola.setElemHost(document.getElementById("resultados") as HTMLElement);
  }
  configurarDescripcion(evento:Event){
    this.mostrarDescripcion = (evento.target as HTMLInputElement).checked;
  }
  configurarCodigo(evento:Event){
    this.mostrarCodigo = (evento.target as HTMLInputElement).checked;
  }
  configurarEjecucion(evento:Event){
    this.mostrarEjecucion = (evento.target as HTMLInputElement).checked;
  }

  test_of(){
    this.inicializarEstados();
    setTimeout( () => this.mostrarOf=true , 0);
    if(!this.mostrarEjecucion)
        return;
    setTimeout( () => this.consola.limpiar(), 0);

    let este = this;

    function getArreglo$(n?:number|undefined){
      return iif( ()=>n === undefined, 
                     of([12,33,15,22,3,10,8,9,99,98]), 
                     interval(100).pipe(
                                      tap(n => este.consola.desplegar("..procesando " + (n +1) )),
                                      take(n!),
                                      map(n => Math.trunc(Math.random() * 100)),
                                      toArray()
                      ) );
    }

  setTimeout(() => getArreglo$()
                    .subscribe(arr => este.consola.desplegar("\t\tcon limite indefinido: " + arr))
                    ,0); // Para que se procese en la cola de tareas y de tiempo a que Angular actualice la vista
  getArreglo$(10).subscribe(arr => este.consola.desplegar("con limite definido: " + arr));

  }
  
  test_from(){
    this.inicializarEstados();
    setTimeout( ()=> this.mostrarFrom=true , 0);
    if(!this.mostrarEjecucion)
        return;
    setTimeout( () => this.consola.limpiar(), 0);

    function getSecuencia$(n?:number|undefined){
        return iif( ()=> n === undefined, 
                       from([12,13,14,15,16,71,81,91,100,111]), 
                       interval(500).pipe(take(n!)) );
    }

    setTimeout(()=>getSecuencia$()
                      .subscribe(i => this.consola.desplegar("\t\tcon limite indefinido, " + i))
                  ,0);
    getSecuencia$(10).subscribe(i => this.consola.desplegar("con limite definido, " + i) );

  }

  test_iif(){
    this.inicializarEstados();
    setTimeout( () => this.mostrarIif=true , 0);
    if(!this.mostrarEjecucion)
        return;
    setTimeout( () => this.consola.limpiar(), 0);
 
    function getSecuencia$(n?:number|undefined){
        return iif( ()=>n === undefined, 
                      interval(500).pipe(take(10)), 
                      interval(700).pipe(take(n!)) );
    }

    getSecuencia$().subscribe(i => this.consola.desplegar("\t\tcon limite indefinido, " + i));
    getSecuencia$(7).subscribe(i => this.consola.desplegar("con limite definido, " + i));
 
  }

  test_timer(){
    this.inicializarEstados();
    setTimeout( () => this.mostrarTimer=true , 0);
    if(!this.mostrarEjecucion)
        return;
    setTimeout( () => this.consola.limpiar(), 0);

    const alarma$ = timer(5000);
    alarma$.subscribe(val => this.consola.desplegar("Valor=" + val));

    interval(500).pipe(
                take(40),
                takeUntil(alarma$)
                )
                .subscribe(pulso => this.consola.desplegar(""+pulso));
  }

  test_merge(){
    this.inicializarEstados();
    setTimeout( () => this.mostrarMerge=true , 0);
    if(!this.mostrarEjecucion)
        return;
    setTimeout( () => this.consola.limpiar(), 0);

    const pulso1$ = interval(1000).pipe(
      map(n=> (n + 101) ),
      take(3)
    );
    const pulso2$ = interval(1400).pipe(
      map(n=> (n + 201) ),
      take(4)
    );
    const pulso3$ = interval(500).pipe(
      map(n=> (n + 301) ),
      take(14)
    );
    const combinacion123Merge$ = merge(
      pulso1$, pulso2$, pulso3$
    );
    combinacion123Merge$.subscribe( num => this.consola.desplegar("" + num));
  }

  test_concat(){
    this.inicializarEstados();
    setTimeout( () => this.mostrarConcat=true , 0);
    if(!this.mostrarEjecucion)
        return;
    setTimeout( () => this.consola.limpiar(), 0);

    const pulso1$ = interval(1000).pipe(
      map(n=> (n + 101) ),
      take(3)
    );
    const pulso2$ = interval(1400).pipe(
      map(n=> (n + 201) ),
      take(4)
    );
    const pulso3$ = interval(500).pipe(
      map(n=> (n + 301) ),
      take(14)
    );

    const combinacion123Concat$ = concat(
      pulso1$, pulso2$, pulso3$
    );

    combinacion123Concat$.subscribe( num => this.consola.desplegar("" + num));

  }

  mostrarAlgo():boolean{
    return this.mostrarFrom || 
           this.mostrarOf ||
           this.mostrarIif ||
           this.mostrarTimer ||
           this.mostrarMerge ||
           this.mostrarConcat;
  }

  inicializarEstados(){
    this.mostrarFrom  = false;
    this.mostrarOf    = false;
    this.mostrarIif   = false;
    this.mostrarTimer = false;
    this.mostrarMerge = false;
    this.mostrarConcat= false;
  }

  getColorFondoResultados():string{
    if(this.mostrarFrom)
      return "table-primary";
    if(this.mostrarOf)
      return "table-primary";
    if(this.mostrarIif)
      return "table-info";
    if(this.mostrarTimer)
      return "table-danger";
    if(this.mostrarMerge)
      return "table-success";
    if(this.mostrarConcat)
      return "table-success";
    return "table-secondary";
  }
}
