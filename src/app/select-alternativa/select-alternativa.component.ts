import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ICampo } from './icampo';
import { ILayout } from './ilayout';

@Component({
  selector: 'app-select-alternativa',
  templateUrl: './select-alternativa.component.html',
  styleUrls: ['./select-alternativa.component.css']
})
export class SelectAlternativaComponent implements OnInit {
  @Input()
  campo : ICampo = {nombre:"",etiquetas:[],valores:[]};
  @Input()
  layout: ILayout = {conBorde:false,mostrarValores:false,tipo:"radio"};
  @Output()
  eeCambioDeValores:EventEmitter<string>;
  
  valoresActualesComponente:string="";
  valoresActivos:boolean[]=[];
  valoresCheckbox:string[]=[];
  valorRadio:string="";

  constructor() { 
    this.eeCambioDeValores = new EventEmitter<string>();
    this.valoresActualesComponente="";
  }
  
  ngOnInit(): void {    
    this.valoresActivos = [];
     let nvals = this.campo.etiquetas.length;
     this.valoresCheckbox = [];
     for(let i=0; i<nvals; i++){
        this.valoresActivos.push(false);
        this.valoresCheckbox.push("");
     }
  }

  publicarValorCampo(){
    this.eeCambioDeValores.emit(this.valoresActualesComponente);
  }

  mostrarCambioValores(evento:Event):void{
    let x:HTMLInputElement = evento.target as HTMLInputElement;
    let valor:number = Number.parseInt(x.value);
    this.actualizarValores(valor, x.checked);

    if(this.layout.tipo=="radio")
      this.valoresActualesComponente = this.valorRadio;
    else
      this.valoresActualesComponente = this.valoresCheckbox.join(', ');
    this.publicarValorCampo();
  }

  actualizarValores(valorOpcion:number, estaChecado:boolean){
    if(this.layout.tipo == "radio")
      this.actualizarValoresRadio(valorOpcion);
    else
      this.actualizarValoresCheckbox(valorOpcion,estaChecado);
  }

  actualizarValoresRadio(valorOpcion:number){
      this.valoresActivos.fill(false);
      this.valoresActivos[valorOpcion]=true;
    
      for(let i=0; i<this.campo.etiquetas.length; i++){
        if(this.valoresActivos[i]){
          this.valorRadio = this.campo.valores[i];
          break;
        }
      }
  }
  
  actualizarValoresCheckbox(valorOpcion:number, estaChecado:boolean){
    if(estaChecado)
      this.valoresActivos[valorOpcion]=true;
    else
      this.valoresActivos[valorOpcion]=false;
    
    this.valoresCheckbox = [];
    for(let i=0; i<this.campo.etiquetas.length; i++){
      if(this.valoresActivos[i]){
        this.valoresCheckbox.push(this.campo.valores[i]);
      }
    }
  }

}
