import { Component, AfterViewInit,Input, OnChanges, SimpleChanges } from '@angular/core';
import { IPunto } from './IPunto';

@Component({
  selector: 'app-canvas01',
  templateUrl: './canvas01.component.html',
  styleUrls: ['./canvas01.component.css']
})
export class Canvas01Component implements OnChanges, AfterViewInit {
  idCanvas:string;
  canvas?:HTMLCanvasElement;
  ctx?:CanvasRenderingContext2D;

  //Configuración
  @Input()
  puntos:IPunto[]=[];
  @Input() 
  ancho:number=0;
  @Input()
  alto:number=0;
  readonly color = 'hsl(10,100%,50%)';

  constructor() { 
    this.idCanvas = this.getIdUnica("canvas");
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.canvas){
      this.inicializarCanvas();
      this.redibujar();
    }
  }
  ngAfterViewInit(): void {
     this.canvas = document.getElementById(this.idCanvas) as HTMLCanvasElement;
     this.ctx = this.canvas.getContext('2d')!;
     this.dibujar(this.ctx, this.puntos, this.color);
  }
  redibujar(){
    this.dibujar(this.ctx!, this.puntos, this.color);   
  }
  inicializarCanvas(){
    this.canvas!.width = this.ancho;
    this.canvas!.height = this.alto;
  }
  dibujar(dctx: CanvasRenderingContext2D, dPuntos:IPunto[], dColor:string){
    if(dPuntos.length < 2)
      return;
    dctx.strokeStyle = dColor;
    dctx.beginPath();
    dctx.moveTo(dPuntos[0].x, dPuntos[0].y);
    for(let i=1; i<dPuntos.length; i++){
      dctx.lineTo(dPuntos[i].x, dPuntos[i].y)
    }
    dctx.stroke();
  }
  getIdUnica(base:string):string{
    return base + Math.round( Math.random() * 1000); 
  }
}
