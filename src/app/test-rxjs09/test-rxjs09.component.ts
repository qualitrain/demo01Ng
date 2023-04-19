import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, DoCheck } from '@angular/core';
import { debounce, debounceTime, filter, fromEvent, interval, map, merge, tap, throttle, throttleTime } from 'rxjs';
import { IPunto } from 'src/app/lib-qtx/canvas01/IPunto';


@Component({
  selector: 'app-test-rxjs09',
  templateUrl: './test-rxjs09.component.html',
  styleUrls: ['./test-rxjs09.component.css']
})
export class TestRxjs09Component implements AfterViewInit, DoCheck {
  demoDebounce=true;

  idDivTest:string="";
  divTest?:HTMLDivElement;

  idInputMilis:string="";
  inputMilis?:HTMLInputElement;

  idRadioDebounce:string="";
  idRadioDebounceTime:string="";
  idRadioThrottle:string="";
  idRadioThrottleTime:string="";

  radioDebounce?:HTMLInputElement;
  radioDebounceTime?:HTMLInputElement;
  radioThrottle?:HTMLInputElement;
  radioThrottleTime?:HTMLInputElement;

  //Parametros canvas
  puntos:IPunto[] = [];
  altoDivTest:number=100;
  anchoDivTest:number=100;

  //Parametros debounce-throttle
  milis:number=30;
  operadorAct:string="throttle";

  constructor() { 
    this.idDivTest = this.getIdUnica("divTest");
    this.idInputMilis = this.getIdUnica("inputMilis");
    this.idRadioDebounce = this.getIdUnica("radioDebounce");
    this.idRadioDebounceTime = this.getIdUnica("radioDebounceTime");
    this.idRadioThrottle = this.getIdUnica("radioThrottle");
    this.idRadioThrottleTime = this.getIdUnica("radioThrottleTime");
  }
  getIdUnica(base:string):string{
    return base + Math.round( Math.random() * 1000); 
  }
  actualizarParamsAnchoyAlto(){
    this.anchoDivTest = this.divTest!.getBoundingClientRect().width;
    this.altoDivTest = this.divTest!.getBoundingClientRect().height;
  }
  ngDoCheck(): void {
    if(this.divTest){
      this.actualizarParamsAnchoyAlto();
    }
  }
  ngAfterViewInit(): void {
    this.divTest = document.getElementById(this.idDivTest) as HTMLDivElement;
    this.inputMilis = document.getElementById(this.idInputMilis) as HTMLInputElement;
    this.radioDebounce = document.getElementById(this.idRadioDebounce) as HTMLInputElement;
    this.radioDebounceTime = document.getElementById(this.idRadioDebounceTime) as HTMLInputElement;
    this.radioThrottle = document.getElementById(this.idRadioThrottle) as HTMLInputElement;
    this.radioThrottleTime = document.getElementById(this.idRadioThrottleTime) as HTMLInputElement;
    this.testDebounceVsThrottle();
  }

  getMovtosRaton$(milis:number,operador:string){
    let movtosRaton$ = fromEvent(this.divTest as HTMLElement, 'mousemove').pipe(
      map( evtI => evtI as MouseEvent),
//    filter( (evtI:MouseEvent) => (evtI.buttons === 1)), //Activar dibujo solo cuando se oprime click izquierdo
      map(evtMi => this.getPuntoRelativo(evtMi,this.divTest as HTMLElement) ));

    switch(operador){
      case "throttleTime":
        movtosRaton$ = movtosRaton$.pipe(
          throttleTime(milis));
        break;
      case "throttle":
        movtosRaton$ = movtosRaton$.pipe(
          throttle( () => interval(milis)) );
        break;
      case "debounceTime":
        movtosRaton$ = movtosRaton$.pipe(
          debounceTime(milis));
        break;
      case "debounce":
        movtosRaton$ = movtosRaton$.pipe(
          debounce( () => interval(milis)) );
        break;
      default:
        movtosRaton$ = movtosRaton$.pipe(
          throttleTime(milis));      
    }
    return movtosRaton$;
  }

  testDebounceVsThrottle(){
    let movtosRaton$ = this.getMovtosRaton$(this.milis,"throttle");
   
    let cambiosMilis$ = fromEvent(this.inputMilis as HTMLElement, 'change').pipe(
                          map( () => Number.parseInt(this.inputMilis!.value)),
                          debounce(()=>interval(500)),
                          map( valorI => { 
                            return {tipo:"milis", valor:valorI}
                          }) 
                        )

    let cambiosConfig$ = merge (
          fromEvent(this.radioDebounce as HTMLElement, 'change').pipe(
                    map( ()=> this.radioDebounce!.value),
                    map( valorI => { 
                      return {tipo:"operador", valor:valorI}}) 
                      ),
          fromEvent(this.radioDebounceTime as HTMLElement, 'change').pipe(
                    map( ()=> this.radioDebounceTime!.value),
                    map( valorI => { 
                      return {tipo:"operador", valor:valorI}}) 
                    ),
          fromEvent(this.radioThrottle as HTMLElement, 'change').pipe(
                    map( ()=> this.radioThrottle!.value),
                    map( valorI => { 
                      return {tipo:"operador", valor:valorI}}) 
                    ),
          fromEvent(this.radioThrottleTime as HTMLElement, 'change').pipe(
                    map( ()=> this.radioThrottleTime!.value),
                    map( valorI => { 
                      return {tipo:"operador", valor:valorI}}) 
                    ),
          cambiosMilis$
    );

    let suscMovtosRaton = movtosRaton$.subscribe( ptoI => this.dibujarNuevoPunto(ptoI) );

    cambiosConfig$.subscribe( cambio => {
              suscMovtosRaton.unsubscribe();
              if(cambio.tipo == "milis")
                  this.milis = cambio.valor as number;
              else
                  this.operadorAct = cambio.valor + "";
              movtosRaton$ = this.getMovtosRaton$(this.milis,this.operadorAct); //Redefinir fuente observable
              suscMovtosRaton = movtosRaton$.subscribe( ptoI => this.dibujarNuevoPunto(ptoI) );
            })
  }

  dibujarNuevoPunto(ptoI:IPunto){
    this.puntos.push(ptoI);
    //Actualizar referencia del arreglo para provocar que el monitor de cambios de angular detecte el cambio
    let nvosPuntos = [...this.puntos];
    this.puntos = nvosPuntos; 
  }
  getPuntoRelativo(evt:MouseEvent, elem:HTMLElement):IPunto{
    const rectElem = elem.getBoundingClientRect();
    let xR = evt.clientX - rectElem.left;
    let yR = evt.clientY - rectElem.top;
    return { x:xR, y:yR }
  }
  limpiarCanvas(){
    this.puntos=[];
  }


}
