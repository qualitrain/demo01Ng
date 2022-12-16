import { Component, Input, ElementRef, ViewChild, AfterViewInit, ViewChildren, AfterContentInit,
         QueryList, ContentChild, ContentChildren } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements AfterViewInit, AfterContentInit{
  ancho:number=18;

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

  @ContentChild("titListaRelevante")
  elemNgContent!:ElementRef;

  titRelevante:string="";

  // Inyectará los elementos DOM del ng-content con #Relevante del PRIMER NIVEL (No funciona en elementos anidados 2do o tercer nivel)
  @ContentChildren('Relevante')
  elemsRelevantes!:QueryList<ElementRef>;

  textRelevante:string="";

  ngOnInit():void {
    if(this.debug==="true")
      this.debugOn =true;
    else
      this.debugOn = false;
  }
  
  ngAfterViewInit(): void {
    console.log("***************** ngAfterViewInit() *****************")
    // ---------------- Mostrando valores de elemento inyectado @ViewChild ----------------

    /* 
    Se debe hacer así para evitar errores modificando una vista que ya estaba rendereada: Se forma el 
    cambio para hacerse en el siguiente ciclo de procesamiento de eventos
    */
    setTimeout(()=>this.urlImagen = this.elemImagen.nativeElement.src,0);

    // ---------------- Mostrando valores de elementos inyectados @ViewChildren ----------------
    let urlsBtnsAccion:string[]=[];
    for (let elemI of this.botonesLink){
      urlsBtnsAccion.push(elemI.nativeElement.href);
    }
    console.log("\nBotones:")
    console.log(this.botonesLink);
    setTimeout(()=>this.urlsAccion = urlsBtnsAccion.join(", "),0);
  }

  ngAfterContentInit():void{
    console.log("***************** ngAfterContentInit() *****************")
    console.log(this.elemsRelevantes);
    // ---------------- Mostrando valores de elemento inyectado @ContentChild ----------------
    let div:HTMLDivElement = this.elemNgContent.nativeElement;
    setTimeout(()=>this.titRelevante = div.innerText,0);
    console.log(div);

    // ---------------- Mostrando valores de elementos inyectados @ContentChildren ----------------
    let textosRelevantes:string[]=[];
    this.elemsRelevantes.forEach( elemI => textosRelevantes.push(elemI.nativeElement.innerText));
    this.textRelevante = textosRelevantes.join(" / ");
    console.log(this.elemsRelevantes);
    console.log(textosRelevantes);
  }
}
