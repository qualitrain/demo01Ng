import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit{
  opcion:boolean[]=[];
  n:number=1;

  constructor(private rutaActiva:ActivatedRoute){}

  ngOnInit(): void {
    this.rutaActiva.url.subscribe(fragsUrl => this.inicializarRutaActiva(fragsUrl));
  }
  inicializarRutaActiva(fragsUrl:UrlSegment[]){
    console.log("Invocacion num " + this.n++);
    console.log(fragsUrl);
    this.opcion.forEach((val,idx,arr)=>arr[idx]=false); 
  }
  activarOpcion(nOpcion:number){
    this.opcion.forEach((val,idx,arr)=>arr[idx]=false);
    this.opcion[nOpcion]=true;
  }
}
