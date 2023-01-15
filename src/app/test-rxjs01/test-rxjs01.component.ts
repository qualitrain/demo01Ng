import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

//import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-test-rxjs01',
  templateUrl: './test-rxjs01.component.html',
  styleUrls: ['./test-rxjs01.component.css']
})
export class TestRxjs01Component implements AfterViewInit{

  @ViewChild("Btn01")
  refBoton01!:ElementRef;


  boton01?:HTMLButtonElement;
  nClicks:number = 0;

  observableBoton01!:Observable<Event>;
  suscrClicksBoton01!:Subscription;
  suscripcionActiva:boolean=false;

  ngAfterViewInit(): void {
    // Generar un observable que envuelve los eventos click que genere boton01
    //  this.boton01 = document.getElementById("idBtn01") as HTMLButtonElement;
    this.boton01 = this.refBoton01.nativeElement;
    this.observableBoton01 = fromEvent(this.boton01 as any,'click');

    //suscripción al observable
    this.suscribirClick()
    
  }

  suscribirClick(){
    this.suscrClicksBoton01 = 
        this.observableBoton01.subscribe( (evtI:Event) => this.actualizarClicks(evtI));
    setTimeout(() => this.suscripcionActiva = true,0);
   // this.suscripcionActiva = true;
  }

  actualizarClicks(evt:Event):void{
    this.nClicks++;
  }
  terminarSuscripcion():void{
    this.suscrClicksBoton01.unsubscribe();
    this.suscripcionActiva = false;
  }
  procesarSuscripcion():void{
    if(this.suscripcionActiva)
      this.terminarSuscripcion();
    else
      this.suscribirClick();
  }

}