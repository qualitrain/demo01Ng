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
  ServicioComoMotorDeCoreografiaOn         :boolean=true;
  HerenciaDeServiciosYuseExistingOn        :boolean=true;
  PersonalizandoBusquedaDeInyectoresOn     :boolean=true;
  InyectoresPersonalizadosOn               :boolean=true;

  IntroduccionAlosObservablesYelRxJsOn     :boolean=false; //test-rxjs01
  FuncBasicasCrearObservablesAdaptadoresOn :boolean=false;  //test-rxjs02
  FuncionBindCallbackOn                    :boolean=false; //test-rxjs03
  PipelineEnRxJsOn                         :boolean=false; // test-rxjs04

  MasFuncionesCreadorasEnRxJsOn            :boolean=false; // test-rxjs05

  OperadoresFiltradoFilteryMapOn           :boolean=false; //test-rxjs06
  OperadoresFiltradoPorPosicionOn          :boolean=false;  //test-rxjs07
  OperFiltrosOptimizadoDebounceTimeOn      :boolean=false; //test-rxjs08
  OperFiltrosOptimizadoDebounceThrottleOn  :boolean=false; //test-rxjs09

  OperAgrupacionReduceScanMaxCountOn       :boolean=false; //test-rxjs10
  OperRecoleccionEnArrBufferTimeYcountOn   :boolean=false; //test-rxjs11

  OperCombinaConcatMergeSwitchExhaustMapOn :boolean=false; //test-rxjs12
  OperCombinaSwitchMapVsSwitchAllOn        :boolean=false; //test-rxjs12-b
  CreaObsQCombinaEnArrMasObsCombineLatestOn:boolean=false; //test-rxjs13
  IntegracionDeObservablesOn               :boolean=false; //test-rxjs14
  
  EjemplosAjaxOn                           :boolean=false; //test-rxjs15-ajax

  EjemploMultiCastingYusoDeSubjectOn       :boolean=false; //test-rxjs16-subject
  EjemploSchedulersOn                      :boolean=false; //test-rxjs17-scheduler

  EjemplosModularizacionYruteoOn           :boolean=true; 

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
