import { Component, Input, ElementRef, ViewChild, AfterViewInit, ViewChildren, AfterContentInit, OnChanges,
         QueryList, ContentChild, ContentChildren, Directive, Renderer2 } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Directive({ selector:"[EsRelevante]"})
export class EsRelevante{
  constructor(private el:ElementRef, private renderer:Renderer2){}
  get elem(){
    return this.el;
  }
}

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements AfterViewInit, AfterContentInit, OnChanges{
  ancho:number=18;

  @Input()
  debug:string="false";
  debugOn:boolean=false;

  @Input()
  demoView:string="false";
  demoViewOn:boolean=false;

  @Input()
  demoContent:string="false";
  demoContentOn:boolean=false;

  @Input()
  demoContentDirectiva:string="false";
  demoContentDirectivaOn:boolean=false;

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

  // Inyectar elementos que correspondan con la directiva indicada
  @ContentChildren(EsRelevante, {descendants: true})
  elemsDirRelevantes!:QueryList<ElementRef>;

  textosDirEsRelevante:string="";

  ngOnChanges():void {
    console.log("***************** ngOnChanges() *****************");
    if(this.debug ==="true")
      this.debugOn = true;
    else
      this.debugOn = false;

    if(this.demoView ==="true")
      this.demoViewOn = true;
    else
      this.demoViewOn = false;

    if(this.demoContent ==="true")
      this.demoContentOn = true;
    else
      this.demoContentOn = false;

      if(this.demoContentDirectiva ==="true")
      this.demoContentDirectivaOn = true;
    else
      this.demoContentDirectivaOn = false;
  }
  
  ngAfterViewInit(): void {
    console.log("***************** ngAfterViewInit() *****************");
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
  //  console.log("\nBotones:")
  //  console.log(this.botonesLink);
    setTimeout(()=>this.urlsAccion = urlsBtnsAccion.join(", "),0);
  }

  ngAfterContentInit():void{
    console.log("***************** ngAfterContentInit() *****************")
 //   console.log(this.elemsRelevantes);
    // ---------------- Mostrando valores de elemento inyectado @ContentChild ----------------
    let div:HTMLDivElement = this.elemNgContent.nativeElement;
    setTimeout(()=>this.titRelevante = div.innerText,0);
//    console.log(div);

    // ---------------- Mostrando valores de elementos inyectados @ContentChildren ----------------
    let textosRelevantes:string[]=[];
    this.elemsRelevantes.forEach( elemI => textosRelevantes.push(elemI.nativeElement.innerText));
    this.textRelevante = textosRelevantes.join(" / ");
//    console.log(this.elemsRelevantes);
//    console.log(textosRelevantes);

    // ---- Mostrando valores de elementos inyectados @ContentChildren que corresponden con una directiva ----
//    console.log(this.elemsDirRelevantes)
    let textosDirRelevante:string[]=[];
    
    this.elemsDirRelevantes.forEach( elemI => {
      let directivaI:EsRelevante = elemI as unknown as EsRelevante;
      textosDirRelevante.push(directivaI.elem.nativeElement.innerText);
    });
//    console.log(textosDirRelevante);
    setTimeout( ()=>this.textosDirEsRelevante = textosDirRelevante.join(", "),0);
  }
}
