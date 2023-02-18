import { Component, OnInit, AfterViewInit} from '@angular/core';
import { concatMap, fromEvent, interval, map, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-test-rxjs14',
  templateUrl: './test-rxjs14.component.html',
  styleUrls: ['./test-rxjs14.component.css']
})
export class TestRxjs14Component implements OnInit, AfterViewInit{
  diplaySpanAviso:string="none";
  idBtnMedir:string="";
  btnMedir?:HTMLButtonElement;
  segundos:number=0;

  ngOnInit(): void {
    this.idBtnMedir = "btnMedir" + Math.trunc(Math.random() * 1000);
  }
  ngAfterViewInit(): void {
    this.btnMedir = document.getElementById(this.idBtnMedir) as HTMLButtonElement;

    const mouseAbajoBtnMedir$ = fromEvent(this.btnMedir,"mousedown").pipe(
      tap(()=>this.diplaySpanAviso = "inline"),
      concatMap( evt => interval(10).pipe(  //concatena un interval a cada mousedown
                                      map(n => n*10)) // devuelve los milisegundos transcurridos
      ), 
      takeUntil(fromEvent(this.btnMedir,"mouseup")) //termina cuando llegue un mouseup
    );

    mouseAbajoBtnMedir$.subscribe(milis => this.segundos = milis/1000);

    fromEvent(this.btnMedir,"click").pipe( //No se puede usar nuevamente el evento mousedown pq tiene un efecto recursivo
                                           //Sin embargo se activa después del mouseup por lo que no procesará el primer click
                                           //Por eso requerimos una suscripcion inicial -linea anterior-
            concatMap(() => mouseAbajoBtnMedir$)
    ).subscribe(milis => this.segundos = milis/1000);

    fromEvent(this.btnMedir,"mouseup") // Cuando se suelte el botón debe desaparecer el contador de la pantalla y re-inicializarse
       .subscribe( ()=> {
                          this.diplaySpanAviso = "none";
                          this.segundos = 0;
                        });
  }
}
