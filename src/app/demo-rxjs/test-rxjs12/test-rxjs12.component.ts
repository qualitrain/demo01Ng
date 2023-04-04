import { AfterViewInit, Component } from '@angular/core';
import { concatMap, exhaustMap, fromEvent, interval, map, mergeMap, Observable, of, startWith, switchMap, take, tap } from 'rxjs';
import { ConsolaHtml } from '../../servicios/consolaHtml';

@Component({
  selector: 'app-test-rxjs12',
  templateUrl: './test-rxjs12.component.html',
  styleUrls: ['./test-rxjs12.component.css'],
  providers: [ConsolaHtml]
})
export class TestRxjs12Component implements AfterViewInit{
  readonly meses:string[] = ['enero','febrero','marzo','abril','mayo','junio','julio',
  'agosto','septiembre','octubre','noviembre','diciembre'];

  readonly personas:string[] = [ 'Alberto','Bertha','Carlos','Daniela',"Efrén","Fernando",
                        "Gonzalo","Homero","Isabel" ];
  
  idConsola:string="";

  idBtnConcatMap:string="";
  idBtnMergeMap:string="";
  idBtnSwitchMap:string="";
  idBtnExhaustMap:string="";

  btnConcatMap?:HTMLButtonElement;
  btnMergeMap?:HTMLButtonElement;
  btnSwitchMap?:HTMLButtonElement;
  btnExhaustMap?:HTMLButtonElement;

  mesesCada1000milis$: Observable<string>;
  personasCada330$:    Observable<string>;

  constructor(private consola:ConsolaHtml){
    this.idConsola =       this.getIdUnica("consolaRxjs12");
    this.idBtnConcatMap =  this.getIdUnica("BtnConcatMap");
    this.idBtnMergeMap =   this.getIdUnica("BtnMergeMap");
    this.idBtnSwitchMap =  this.getIdUnica("BtnSwitchMap");
    this.idBtnExhaustMap = this.getIdUnica("BtnExhaustMap");

    // cada n milis devuelve el siguiente mes del arreglo de meses. Se topan los valores a devolver
    this.mesesCada1000milis$ = interval(1000).pipe(
                                  map(n => this.meses[n % this.meses.length]),
                                  take(this.meses.length) 
                                ); 
    // cada n milis devuelve el siguiente nombre del arreglo de personas. Se topan los valores a devolver
    this.personasCada330$ = interval(330).pipe(
      map(n => this.personas[n % this.personas.length]),
      take(this.personas.length)
    );

  }
  getIdUnica(base:string):string{
    return base + Math.round( Math.random() * 1000); 
  }

  ngAfterViewInit(): void {
    this.btnConcatMap = document.getElementById(this.idBtnConcatMap) as HTMLButtonElement;
    this.btnMergeMap = document.getElementById(this.idBtnMergeMap) as HTMLButtonElement;
    this.btnSwitchMap = document.getElementById(this.idBtnSwitchMap) as HTMLButtonElement;
    this.btnExhaustMap = document.getElementById(this.idBtnExhaustMap) as HTMLButtonElement;

    this.configConcatMap();
    this.configMergeMap();
    this.configSwitchMap();
    this.configExhaustMap();

    this.consola.setElemHost(document.getElementById(this.idConsola)!);

  }

  configConcatMap(){
     const mesesConcatPersonas$ =
           this.mesesCada1000milis$
            .pipe(
                concatMap( mesI => this.personasCada330$
                                      .pipe(
                                        map(p => mesI + " concat-> " + p )
                                      )
                )
            );
            
    let i=1;

    //Escuchará cada click, pero una vez que inicie la demo, ignorará los clicks del botón
    // hasta que termine de procesar la fuente anidada
    const clickBtnConcatMap$ = fromEvent(this.btnConcatMap as HTMLElement,"click")
                                .pipe(
                                    exhaustMap( () => { i=1;
                                                        return mesesConcatPersonas$; })
                                );

    clickBtnConcatMap$.subscribe( valI => this.consola.mostrarEnColorLn("C "+ i++ + ". " + valI,"DeepSkyBlue"));          
  }

  configMergeMap(){
    const mesesMergePersonas$ =
           this.mesesCada1000milis$
            .pipe(
                mergeMap( mesI => this.personasCada330$
                                      .pipe(
                                        map(p => mesI + " merge-> " + p )
                                      )
                )
            );
    let i=1;
    //Escuchará cada click, pero una vez que inicie la demo, ignorará los clicks del botón
    // hasta que termine de procesar la fuente anidada
    const clickBtnMergeMap$ = fromEvent(this.btnMergeMap as HTMLElement,"click")
                                .pipe(
                                    exhaustMap( () => { i=1;
                                                        return mesesMergePersonas$; })
                                );


    clickBtnMergeMap$.subscribe( valI => this.consola.mostrarEnColorLn("M "+ i++ + ". " + valI,"cyan"));          
  }

  configSwitchMap(){
    const mesesSwitchPersonas$ =
           this.mesesCada1000milis$
            .pipe(
                switchMap( mesI => this.personasCada330$
                                      .pipe(
                                        map(p => mesI + " switch-> " + p )
                                      )
                )
            );
    let i=1;

    //Escuchará cada click, pero una vez que inicie la demo, ignorará los clicks del botón
    // hasta que termine de procesar la fuente anidada
    const clickBtnSwitchMap$ = fromEvent(this.btnSwitchMap as HTMLElement,"click")
                                .pipe(
                                    exhaustMap( () => { i=1;
                                                        return mesesSwitchPersonas$; })
                                );

    clickBtnSwitchMap$.subscribe( valI => this.consola.mostrarEnColorLn("S "+ i++ + ". " + valI,"PaleGreen"));          
  }

  configExhaustMap(){
    const mesesExhaustPersonas$ =
           this.mesesCada1000milis$
            .pipe(
                exhaustMap( mesI => this.personasCada330$
                                      .pipe(
                                        map(p => mesI + " exhaust-> " + p )
                                      )
                )
            );
    let i=1;

    //Escuchará cada click, pero una vez que inicie la demo, ignorará los clicks del botón
    // hasta que termine de procesar la fuente anidada
    const clickBtnExhaustMap$ = fromEvent(this.btnExhaustMap as HTMLElement,"click")
                                .pipe(
                                    exhaustMap( () => { i=1;
                                                        return mesesExhaustPersonas$; })
                                );

    clickBtnExhaustMap$
         .subscribe( 
             valI => this.consola.mostrarEnColorLn("E "+ i++ + ". " + valI,"HotPink"));          
  }
  limpiarConsola(){
    this.consola.limpiar();
  }
}
