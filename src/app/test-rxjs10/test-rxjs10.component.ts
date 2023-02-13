import { Component, AfterViewInit } from '@angular/core';
import { count, fromEvent, interval, map, max, Observable, reduce, scan, Subscription, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-test-rxjs10',
  templateUrl: './test-rxjs10.component.html',
  styleUrls: ['./test-rxjs10.component.css']
})
export class TestRxjs10Component implements AfterViewInit{

  divCajaTakeUntil?:HTMLDivElement;
  cursorDentroDeCaja:boolean=false;

  readonly DURACION_TEST_MOUSEOVER:number = 30;

  nSegundos:number = this.DURACION_TEST_MOUSEOVER;

  totEntMouse$?:Observable<number>;
  totEntMouseB$?:Observable<number>;
  totEntMouseC$?:Observable<number>;
  acumParcialEntradasMouse$?:Observable<number>;

  ngAfterViewInit(): void {
    this.divCajaTakeUntil = document.getElementById("div03") as HTMLDivElement;

    this.testTakeUntilReduce();
  }
  testTakeUntilReduce(){
    const entradasMouseADivCaja$ = 
                  fromEvent(this.divCajaTakeUntil as HTMLElement,"mouseover").pipe(
                            map (()=>1),
                            takeUntil(interval(this.DURACION_TEST_MOUSEOVER * 1000))
                            );

    this.acumParcialEntradasMouse$ = entradasMouseADivCaja$.pipe(
          scan ( (acum,entMouse) => acum + entMouse ,0)    
    );
                                
    // Las fuentes de observables siguientes emiten un resultado equivalente
    this.totEntMouse$ = entradasMouseADivCaja$.pipe(
                  reduce( (acum,entMouse) => acum + entMouse ,0)    
            );
    this.totEntMouseB$ = entradasMouseADivCaja$.pipe(
                  count()    
            );
    this.totEntMouseC$ = this.acumParcialEntradasMouse$.pipe(
                  max()    
            );

    // Cuenta regresiva de segundos
    const cuentaRegresiva$ = interval(1000).pipe(
                                map( n => this.DURACION_TEST_MOUSEOVER - n - 1 ),
                                take(this.DURACION_TEST_MOUSEOVER))
    cuentaRegresiva$.subscribe(n => this.nSegundos = n);

    // Cambio de color de la caja cuando entra y sale el mouse de ella
    entradasMouseADivCaja$.subscribe(() =>this.cursorDentroDeCaja = true)
    fromEvent(this.divCajaTakeUntil as HTMLElement, "mouseout")
          .subscribe(()=>this.cursorDentroDeCaja=false)
  }

}
