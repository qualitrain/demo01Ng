import { Component } from '@angular/core';
import { ICampo } from './select-alternativa/icampo';
import { ILayout } from './select-alternativa/ilayout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Demo de funcionalidades de Angular 15+ [demo01Ng]';

  directivasEstructuralesInterpolacionOn   :boolean=false;
  parametrosEntradaYclassBindingOn         :boolean=false;
  elNgModelYelBindingBidireccionalOn       :boolean=false;
  elStyleBindingYelEventoClickOn           :boolean=false;
  componentesQueDevuelvenValoresOn         :boolean=false;
  ComponentesQueRecibenHtmlConNgContentOn  :boolean=false;
  InyeccionDeElementosDOMdeVistaEnClaseOn  :boolean=false;

  InyeccionDependencias2Instances1serviceOn:boolean=false;
  JerarquiaDeInyeccionOn                   :boolean=false;
  ServicioComoMotorDeCoreografiaOn         :boolean=false;
  HerenciaDeServiciosYuseExistingOn        :boolean=false;
  PersonalizandoBusquedaDeInyectoresOn     :boolean=false;
  InyectoresPersonalizadosOn               :boolean=false;

  IntroduccionAlosObservablesYelRxJsOn     :boolean=false;
  FuncBasicasCrearObservablesAdaptadoresOn :boolean=false;
  FuncionBindCallbackOn                    :boolean=false;
  PipelineEnRxJsOn                         :boolean=false;
  MasFuncionesCreadorasEnRxJsOn            :boolean=false;
  OperadoresFiltradoFilteryMapOn           :boolean=false;
  OperadoresFiltradoPorPosicionOn          :boolean=false;
  OperFiltrosOptimizadoDebounceTimeOn      :boolean=false;
  OperFiltrosOptimizadoDebounceThrottleOn  :boolean=false;
  OperAgrupacionReduceScanMaxCountOn       :boolean=false;
  OperRecoleccionEnArrBufferTimeYcountOn   :boolean=false;
  OperCombinaConcatMergeSwitchExhaustMapOn :boolean=false;
  OperCombinaSwitchMapOn                   :boolean=false;
  CreaObsQCombinaEnArrMasObsCombineLatestOn:boolean=false;    

  campoPelicula:ICampo;
  layoutPelicula:ILayout;
  valorPelicula:string="";
  tipoSeleccion:string;

  pruebaInyeccView:string="false";
  pruebaInyeccContent:string="false";
  pruebaInyeccContDir:string="false";

  testFilterOn:boolean=true;
  testFirstLastTakeLastOn:boolean=true;
  testDebounceThrottleOn:boolean=true;
  testReduceScanTakeUntil:boolean=true;

  constructor() {
    this.tipoSeleccion = "checkbox";
    this.campoPelicula = {
      nombre:"Pelicula",
      etiquetas:["El laberinto del Fauno","Pinocho","La forma del agua","El espinazo del diablo","Amores Perros"],
      valores:["LabFau","Pinocho","ForAgua","EspDia","AmPerr"]
    }
    this.layoutPelicula = {
      conBorde:true,
      mostrarValores:false,
      tipo:this.tipoSeleccion
    }

  }
  mostrarValorElegido(evt:any){
    console.log(evt);
    this.valorPelicula = evt;
  }
  actualizarTipoSeleccion(tipoSel:string){
    if(tipoSel !== this.layoutPelicula.tipo){
      this.layoutPelicula.tipo = tipoSel;
      this.valorPelicula = "";
    }
  }
  configurarPruebaInyecElemDOM(evt:Event){
  //  console.log("appComponent.configurarPruebaInyecElemDOM")
    let chkPruebaInyeccion:HTMLInputElement = evt.target as HTMLInputElement;
  //  console.log(chkPruebaInyeccion.id + ":" + chkPruebaInyeccion.checked);
    switch(chkPruebaInyeccion.id){
      case 'cbxView':
        if(chkPruebaInyeccion.checked)
           this.pruebaInyeccView="true";
        else
           this.pruebaInyeccView="false";
        break;
      case 'cbxContent':
        if(chkPruebaInyeccion.checked)
          this.pruebaInyeccContent ="true";
        else
          this.pruebaInyeccContent="false";
       break;
     case 'cbxContDir':
        if(chkPruebaInyeccion.checked)
          this.pruebaInyeccContDir ="true";
        else
          this.pruebaInyeccContDir="false";
       break;
    }
  }
}
