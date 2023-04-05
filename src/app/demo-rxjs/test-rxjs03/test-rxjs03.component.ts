import { Component, AfterViewInit } from '@angular/core';
import { bindCallback } from 'rxjs';

var funcionAsincrona = function(num:number, nInvocacion:number, callback:Function){
    let numAleatorio:number = Math.trunc(Math.random() * 1000);
    console.log(`El numero aleatorio es ${numAleatorio}`);
    let pausa:number = (num * 2000);
    setTimeout(() => callback({ resul:numAleatorio, 
                               nInvoc:nInvocacion}), pausa);
}

@Component({
  selector: 'app-test-rxjs03',
  templateUrl: './test-rxjs03.component.html',
  styleUrls: ['./test-rxjs03.component.css']
})
export class TestRxjs03Component implements AfterViewInit{
  tonos:string[] = ["light", "primary", "secondary", "success", "danger", "warning", "info", "dark"];

  num:number=5;
  nResultado=0;
  proxy: any;

  divResultados!:HTMLElement;

  ngAfterViewInit(): void {
    this.divResultados = document.getElementById("divResultadosRxjs03") as HTMLElement;

    bindCallback(funcionAsincrona)(20,0)
            .subscribe( (n:any)=>console.log(console.log(`Resultado ${n.nInvoc} = ${n.resul}`)) );

    this.proxy = bindCallback(funcionAsincrona);
    this.proxy(15,0).subscribe( (n:any) => console.log(`Resultado ${n.nInvoc} = ${n.resul}`));
  };
  invocarAsincrona():void{
    this.nResultado++;
    this.proxy(this.num, this.nResultado)
        .subscribe( 
          (n:any) => {
                      let cadResultado = `Resultado ${n.nInvoc} = ${n.resul}`;
                      console.log(cadResultado);
                      this.agregarInsigniaDelColorActual(cadResultado, n.nInvoc);
                    });
  }

  agregarInsigniaDelColorActual(cad:string, n:number): void{
    let claseB4 = "'badge badge-" + this.tonos[n % this.tonos.length] + " mr-1'"; 
    let elemHtml = "<span class=" + claseB4 + ">" + cad + "</span>";
    let htmlDiv = this.divResultados.innerHTML;
    this.divResultados.innerHTML = htmlDiv + elemHtml;
  }

}