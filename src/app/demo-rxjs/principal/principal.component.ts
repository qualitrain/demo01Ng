import { Component, OnInit, OnDestroy,AfterViewInit  } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { distinctUntilChanged, fromEvent, map, Subscription } from 'rxjs';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements AfterViewInit, OnDestroy{
  suscrCambioRutaHija?:Subscription;

  constructor(private rutaActiva:ActivatedRoute, 
              private ruteador:Router ){
              
  }
 
  ngAfterViewInit(): void {
//    this.monitorearRuteo();
  }


  monitorearRuteo(){
    this.ruteador.events.subscribe(evt => {
      console.log("ruteador.events")
      console.log(evt)
     });

    this.suscrCambioRutaHija = fromEvent(document.getElementById("ulMenu") as HTMLElement,"click")
                               .pipe(map( ()=> this.rutaActiva.firstChild?.snapshot.url[0].path),
                                     distinctUntilChanged())   
                               .subscribe(rutaHija => this.monitorearRuta(rutaHija));

    this.rutaActiva.url.subscribe(arrSegmentos => {
      console.log("Suscripcion rutaActiva.url:")
      console.log(arrSegmentos);
    })
  }
   
  monitorearRuta(rutaHija:string|undefined){
    let rutaPadre= this.rutaActiva.snapshot.url[0].path
    console.log("/" + rutaPadre + "/"+rutaHija);
  }
  ngOnDestroy(): void {
    this.suscrCambioRutaHija?.unsubscribe();
  }
}