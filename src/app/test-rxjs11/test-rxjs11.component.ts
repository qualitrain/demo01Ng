import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { bufferCount, bufferTime, fromEvent, interval, map, Subscription, take} from 'rxjs';

@Component({
  selector: 'app-test-rxjs11',
  templateUrl: './test-rxjs11.component.html',
  styleUrls: ['./test-rxjs11.component.css']
})
export class TestRxjs11Component implements AfterViewInit, OnDestroy{
  suscrClicksCaja?: Subscription;
  
  readonly PERIODO:number = 10;

  nSegundos:number = this.PERIODO;

  idDivCajaBufferTime:string="";
  divCajaBufferTime?:HTMLDivElement;
  cajaBufferTimeEnClick:boolean=false;

  clicksPeriodo:string="";
  nClicksPeriodo:number=0;

  nClicks=0;

  ultCincoClicks:string="";

  constructor() { 
    this.idDivCajaBufferTime = this.getIdUnica("divTest");
  }
  getIdUnica(base:string):string{
    return base + Math.round( Math.random() * 1000); 
  }

  ngAfterViewInit(): void {
    this.divCajaBufferTime = document.getElementById(this.idDivCajaBufferTime) as HTMLDivElement;
    this.testBuffertime();
  }
  testBuffertime(){
    const clicksDiv01$ = fromEvent(this.divCajaBufferTime as HTMLElement,"click").pipe(
      map(eventI => eventI as MouseEvent),
      map(evMousI => { return { x:evMousI.clientX, y:evMousI.clientY } })
    );
    const clicksAcumuladosPeriodo$ = clicksDiv01$.pipe(
      bufferTime(this.PERIODO * 1000)
    );
    const ultCincoClicks$ = clicksDiv01$.pipe(
      bufferCount(5)
    );
    ultCincoClicks$.subscribe(arr5Clicks => this.ultCincoClicks = JSON.stringify(arr5Clicks));

    const cuentaRegresiva$ = interval(1000).pipe(
      map( n => this.PERIODO - n - 1),
      take(this.PERIODO)
    );

    cuentaRegresiva$.subscribe( n => this.nSegundos = n);
    this.suscrClicksCaja = 
           clicksAcumuladosPeriodo$
              .subscribe ( arrClicksI =>{
                              this.mostrarClicksPeriodo(arrClicksI);
                              cuentaRegresiva$.subscribe( n => this.nSegundos = n);
                              this.nClicks = 0;
                          })

    
    // Para cambiar el color de la caja con cada click:
    fromEvent(this.divCajaBufferTime as HTMLElement,"mousedown")
                               .subscribe(() => {
                                                  this.cajaBufferTimeEnClick=true;
                                                  this.nClicks++;
                                                });
    fromEvent(this.divCajaBufferTime as HTMLElement,"mouseup")
                               .subscribe(() => this.cajaBufferTimeEnClick=false);
  }
  mostrarClicksPeriodo(arrClicks:{x:number,y:number}[]){
      this.clicksPeriodo = JSON.stringify(arrClicks);
      this.nClicksPeriodo = arrClicks.length;
  } 
  ngOnDestroy(): void {
    this.suscrClicksCaja?.unsubscribe();
  }

}
