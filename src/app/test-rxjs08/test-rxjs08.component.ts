import { AfterViewInit, Component, OnInit } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-test-rxjs08',
  templateUrl: './test-rxjs08.component.html',
  styleUrls: ['./test-rxjs08.component.css']
})
export class TestRxjs08Component implements OnInit, AfterViewInit{
  demoDebounceTime=true;

  idInTest:string="";
  inTest?:HTMLInputElement;

  entradasOptimizadas:string[] = [];
  entradas:string[] = [];

  get entradasFiltradas(){
    return this.entradasOptimizadas.join(', ');
  }
  get entradasSinFiltro(){
    return this.entradas.join(', ');
  }
  get nInputs(){
    return this.entradas.length;
  }
  get nInputsOptimizadas(){
    return this.entradasOptimizadas.length;
  }

  getIdUnica(base:string):string{
    return base + Math.round( Math.random() * 1000); 
  }

  ngOnInit(): void {
    this.idInTest = this.getIdUnica("inTest");
  }
  ngAfterViewInit(): void {
    this.inTest = document.getElementById(this.idInTest) as HTMLInputElement;

    this.testDebounce();
  }
  testDebounce(){
    const inputsOptimizadas$ = fromEvent(this.inTest!,"input").pipe(
      map( evtI => evtI as InputEvent ),
      map( evtI => evtI.target as HTMLInputElement ),
      map( inpI => inpI.value),
      debounceTime(500));

    const inputs$ = fromEvent(this.inTest!,"input").pipe(
      map( evtI => evtI as InputEvent ),
      map( evtI => evtI.target as HTMLInputElement ),
      map( inpI => inpI.value)
      );

    inputsOptimizadas$.subscribe( inpI => this.entradasOptimizadas.push(inpI) );
    inputs$.subscribe( inpI => this.entradas.push(inpI) );
  }
}