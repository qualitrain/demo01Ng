import { Component, OnInit } from '@angular/core';
import { filter, fromEvent, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-test-rxjs04',
  templateUrl: './test-rxjs04.component.html',
  styleUrls: ['./test-rxjs04.component.css']
})
export class TestRxjs04Component implements OnInit{
  meses:string[]=["enero","febrero","marzo","abril","mayo","junio","julio","agosto",
                "septiembre","octubre","noviembre","diciembre"];

  mesesTemporadaAlta:string[]=["marzo","abril","julio","agosto","diciembre"];
  temporadaBaja:boolean = false;  
  mesElegido:string="";          

  ngOnInit(): void {   
    //uso de metodo pipe y operadores RxJs para atender eventos sobre meses de temporada baja
    let obsClicksMeses:Observable<Event> = fromEvent(document.getElementById("idDivMeses")!,'click');

    obsClicksMeses.subscribe(evtI => { this.temporadaBaja = false; 
                                       this.mesElegido="";        } );

    obsClicksMeses.pipe(
        map( evtMesI => evtMesI.target as HTMLElement ), 
        filter( (targetI:HTMLElement) => targetI.tagName == "SPAN"),
        map( (spanI:HTMLSpanElement) => spanI.textContent! ) ,
        tap( (mesI:string) => console.log(mesI)),
        filter ((mesI:string) => !this.mesesTemporadaAlta.includes(mesI))
      )
      .subscribe( (mesI:any) => {
        this.mostrarPromocionTemporada(mesI);
      });
  }
  mostrarPromocionTemporada(mes:string){
    this.mesElegido = mes;
    this.temporadaBaja = true;
  }
}