import { Component,AfterViewInit } from '@angular/core';
import { fromEvent, Subscription, map, filter, distinctUntilChanged } from 'rxjs';

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
    let valoresEnHtml:string = this.entradas.join(',');
    valoresEnHtml =  valoresEnHtml.replaceAll(' ',"\u00A0"); //poner espacio que no rompe líneas
    return valoresEnHtml.replaceAll(',',', ');
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
      filter( (valI) => valI.length > 0 ),
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

  esCaracValido(car:string){
    const expReg = /^[a-záéíóúñ ]$/i;
    return expReg.test(car);
  }
  
}
