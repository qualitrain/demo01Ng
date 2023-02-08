import { Component,AfterViewInit } from '@angular/core';
import { fromEvent, pipe, Subscription, from, interval, of, map, filter } from 'rxjs';

@Component({
  selector: 'app-test-rxjs06',
  templateUrl: './test-rxjs06.component.html',
  styleUrls: ['./test-rxjs06.component.css']
})
export class TestRxjs06Component implements AfterViewInit{
  demoMapFilterOn:boolean=true;
  inTexto?:HTMLInputElement;
  entradas:string[] = [];
  suscrEntradaTexto?: Subscription;
  
  get valores(){ 
    return this.entradas.join(', ');
  }

  ngAfterViewInit(): void {
    this.inTexto = document.getElementById("idTexto") as HTMLInputElement;
    this.crearSuscripcionDeInputText();
  }

  crearSuscripcionDeInputText(){
    
    const entradas3$ = fromEvent(this.inTexto as HTMLElement,'input').pipe(
      map(evtI => evtI as Event),
      map(evtI => evtI.target as HTMLInputElement),
      map(elemI => elemI.value.trimStart() ),
      filter( (valI) => valI.length > 2 ),
      map( valI => this.esCaracValido( valI.charAt(valI.length - 1) ) ? 
                                 valI : 
                                 valI.slice(0,valI.length - 1) )
    );
      
    this.suscrEntradaTexto = entradas3$.subscribe( (valI:string) => {
      this.entradas.push(valI);
      if(this.inTexto)
         this.inTexto.value = valI;
    });

  }
  getPipeFiltrado(){
    return pipe(
      map(evtI => evtI as Event),
      map(evtI => evtI.target as HTMLInputElement),
      map(elemI => elemI.value.trimStart() ),
      filter( (valI) => valI.length > 2 ),
      map( valI => this.esCaracValido( valI.charAt(valI.length - 1) ) ? valI : valI.slice(0,valI.length - 1) )
    );
  }
  esCaracValido(car:string){
    const expReg = /^[a-záéíóúñ ]$/i;
    return expReg.test(car);
  }
  
}
