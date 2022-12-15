import { Component, Input, ElementRef, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements AfterViewInit{
  @Input()
  debug:string="false";

  debugOn:boolean=false;

  @Input()
  titulo:string="Título";
  @Input()
  accion:string="Hacer Algo";
  @Input()
  link:string="#";
  @Input()
  imagen:string=""
  
  @ViewChild("elemImagen")
  elemImagen!:ElementRef;

  urlImagen:string="";

  @ViewChildren("btnAccion")
  botonesLink!:QueryList<ElementRef>;

  urlsAccion:string="";

  ngOnInit():void {
    if(this.debug==="true")
      this.debugOn =true;
    else
      this.debugOn = false;
  }
  
  ngAfterViewInit(): void {
    /* 
    Se debe hacer así para evitar errores modificando una vista que ya estaba rendereada: Se forma el 
    cambio para hacerse en el siguiente ciclo de procesamiento de eventos
    */
    setTimeout(()=>this.urlImagen = this.elemImagen.nativeElement.src,0);

    let urlsBtnsAccion:string[]=[];
    for (let elemI of this.botonesLink){
      urlsBtnsAccion.push(elemI.nativeElement.href);
    }
    setTimeout(()=>this.urlsAccion = urlsBtnsAccion.join(", "),0);


    console.log(urlsBtnsAccion.join(", "));
    console.log(this.botonesLink);
  }
}
