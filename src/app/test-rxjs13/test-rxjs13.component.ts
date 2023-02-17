import { Component } from '@angular/core';
import { combineLatest, interval, map, Observable, take } from 'rxjs';

@Component({
  selector: 'app-test-rxjs13',
  templateUrl: './test-rxjs13.component.html',
  styleUrls: ['./test-rxjs13.component.css']
})
export class TestRxjs13Component {
  colores = ["rojo",       "naranja",        "amarillo",       "verde",           "azul",            "violeta" ];
  hsls = ["hsl(0,90%,50%)","hsl(30,90%,50%)","hsl(60,80%,60%)","hsl(100,90%,30%)","hsl(210,90%,40%)","hsl(280,80%,60%)"];

  milisColor1=500;
  milisColor2=800;
  milisColor3=1200;

  lineaCajas:{
              caja1:{color:string, hsl:string, n:number},
              caja2:{color:string, hsl:string, n:number},
              caja3:{color:string, hsl:string, n:number}
            }[] = [];
  colorCaja1?:{color:string, hsl:string, n:number};
  colorCaja2?:{color:string, hsl:string, n:number};
  colorCaja3?:{color:string, hsl:string, n:number};

  demo(milis1:string, milis2:string, milis3:string){
    this.milisColor1 = Number.parseInt(milis1);
    this.milisColor2 = Number.parseInt(milis2);
    this.milisColor3 = Number.parseInt(milis3);
    this.lineaCajas = [];
    const timerColores1$ = this.getTimerColor(this.milisColor1, this.colores.length);
    const timerColores2$ = this.getTimerColor(this.milisColor2,this.colores.length);
    const timerColores3$ = this.getTimerColor(this.milisColor3,12);

    combineLatest([timerColores1$,timerColores2$,timerColores3$ ]).subscribe( (arr:any) => this.actualizarColores(arr))    
  }
  getTimerColor(periodo:number, n:number):Observable<object>{
    return (
    interval(periodo).pipe(
      map(i => { 
        return { color:this.colores[i%this.colores.length], hsl:this.hsls[i%this.hsls.length], n:i} 
      }),
      take(n))
    );
   
  }
  actualizarColores(arrColores:{color:string, hsl:string, n:number}[]){
    this.colorCaja1 = {color:arrColores[0].color, hsl:arrColores[0].hsl, n:arrColores[0].n};
    this.colorCaja2 = {color:arrColores[1].color, hsl:arrColores[1].hsl, n:arrColores[1].n};
    this.colorCaja3 = {color:arrColores[2].color, hsl:arrColores[2].hsl, n:arrColores[2].n};

    this.lineaCajas.push( {caja1:this.colorCaja1, caja2:this.colorCaja2, caja3:this.colorCaja3});
  }

}
