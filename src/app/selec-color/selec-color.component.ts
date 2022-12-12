import { Component, OnInit, Input
  // , OnChanges, SimpleChanges
       } from '@angular/core';

@Component({
  selector: 'app-selec-color',
  templateUrl: './selec-color.component.html',
  styleUrls: ['./selec-color.component.css']
})
export class SelecColorComponent implements OnInit
//, OnChanges 
{
  @Input()
  numCajas:string="";

  id:number;
  tono:number;
  saturacion:number;
  iluminacion:number;
  colores:number[];
  nBotonesColor:number;
  MAX_COLOR:number;

  constructor() { 
    this.id = Math.round(Math.random() * 10000);

    this.nBotonesColor = 30;
    this.MAX_COLOR = 360;
    this.tono=0;
    this.saturacion=100;
    this.iluminacion=50;

    this.colores = []; 
  }

  ngOnInit():void{
    if(this.numCajas != ""){
      this.nBotonesColor = Number.parseInt(this.numCajas);
    }  
    let incremento = this.MAX_COLOR / this.nBotonesColor;
    let tonoI = 0;
    for(let i=0; i<this.nBotonesColor; i++){
      this.colores.push(tonoI);
      tonoI += incremento;
    }
  }

  /*
  ngOnChanges(cambios: SimpleChanges):void{
    console.log(cambios);
  }
  */

  hsl():string {
    return this.toHsl(this.tono, this.saturacion, this.iluminacion);
  }
  toHsl(tonoX:number, satX:number, luzX:number):string {
    return "hsl(" + tonoX + "," + satX + "%" + "," + luzX + "%)";
  }
  getAnchoBtnColor():string{
    return (100 / this.colores.length) + "%";
  }
  getColorHsl(tonoI:number):string{
    return this.toHsl(tonoI, 100, 50);
  }
  resetColor(colorI:number):void{
    this.tono = colorI;
  }
}