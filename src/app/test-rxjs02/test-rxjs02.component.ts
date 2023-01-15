import { Component,AfterViewInit } from '@angular/core';
import { fromEvent, interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-test-rxjs02',
  templateUrl: './test-rxjs02.component.html',
  styleUrls: ['./test-rxjs02.component.css']
})
export class TestRxjs02Component implements AfterViewInit {
  tonos:string[] = ["light", "primary", "secondary", "success", "danger", "warning", "info", "dark"];
  claseB4TonoAct:string="bg-dark";
  tonoI:string = "dark";
  
  boton?:HTMLButtonElement;
  botonLimpiar?:HTMLButtonElement;
  botonDetener?:HTMLButtonElement;
 
  divResultados!:HTMLElement;
  
  observableClicks?:Observable<Event>;
  obsPulso1500mili?:Observable<Number>;
  suscripcionPulso?:Subscription;
  
  ngAfterViewInit(): void {
    this.boton = document.getElementById("btn01") as HTMLButtonElement;
    this.botonLimpiar = document.getElementById("btnLimpiar") as HTMLButtonElement;
    this.botonDetener = document.getElementById("btnDetener") as HTMLButtonElement;
    this.divResultados = document.getElementById("div01") as HTMLElement;
    
    this.observableClicks = fromEvent(this.boton,'click');
    this.obsPulso1500mili = interval(1500); // Observable que devuelve 1, 2, 3, ... N. Un número cada 1500 milis
    
    this.suscripcionPulso = this.obsPulso1500mili.subscribe( (num:Number) => this.actualizarColorActual(num as number) )
         
    this.observableClicks.subscribe( (evt:Event) => this.agregarInsigniaDelColorActual(evt) );
    
    fromEvent(this.botonLimpiar,'click').subscribe(
            (evt:Event) => this.divResultados.innerHTML="" );
      
  }
          
  agregarInsigniaDelColorActual(evt:Event): void{
    let claseB4 = "'badge badge-" + this.tonoI + " mr-1'"; 
    let elemHtml = "<span class=" + claseB4 + ">Nuevo click</span>";
    let htmlDiv = this.divResultados.innerHTML;
    this.divResultados.innerHTML = htmlDiv + elemHtml;
  }

  actualizarColorActual(numI:number){
    this.tonoI = this.tonos[numI % this.tonos.length];
    this.claseB4TonoAct = "bg-" + this.tonoI;
  }

  detenerCambioColores(){
    this.suscripcionPulso?.unsubscribe();
  }
}
