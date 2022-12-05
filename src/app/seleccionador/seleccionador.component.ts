import { Component, OnInit, Input, } from '@angular/core';
import { ICampo } from './icampo';
import { ILayout } from './ilayout';

@Component({
  selector: 'app-seleccionador',
  templateUrl: './seleccionador.component.html',
  styleUrls: ['./seleccionador.component.css']
})
export class SeleccionadorComponent implements OnInit {
  campo : ICampo;
  layout: ILayout;

  @Input()
  paramNombre:string = ""; 
  @Input()
  paramEtiquetas:string = ""; 
  @Input()
  paramValores:string = "";
  
  @Input()
  paramConBorde:string = ""; 
  @Input()
  paramMostrarValores:string = ""; 
  @Input()
  paramTipo:string = ""; // checkbox o radio


  constructor() {
    this.campo = {
      nombre:"turno",
      etiquetas:["matutino","vespertino","mixto"],
      valores:["M","V","X"]
    };
    this.layout = {
      conBorde:false,
      tipo:"radio",
      mostrarValores:false
    }
   }

   ngOnInit(): void {
     if(this.paramNombre !== ""){
       this.campo.nombre = this.paramNombre;
     }
     if(this.paramEtiquetas !== ""){
       this.campo.etiquetas = this.paramEtiquetas.split(",");
     }
     if(this.paramValores !== ""){
      this.campo.valores = this.paramValores.split(",");
    }
    if(this.paramConBorde !== ""){
      if(this.paramConBorde === "true")
         this.layout.conBorde = true;
    }
    if(this.paramMostrarValores !== ""){
      if(this.paramMostrarValores === "true")
         this.layout.mostrarValores = true;
    }
    if(this.paramTipo !== ""){
      this.layout.tipo = this.paramTipo;
    }
  }
}