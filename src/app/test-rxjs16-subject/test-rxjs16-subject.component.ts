import { Component,AfterViewInit } from '@angular/core';
import { fromEvent, interval, map, of, Subject, switchMap, take, tap } from 'rxjs';
import { ConsolaHtml } from '../servicios/consolaHtml';

@Component({
  selector: 'app-test-rxjs16-subject',
  templateUrl: './test-rxjs16-subject.component.html',
  styleUrls: ['./test-rxjs16-subject.component.css']
})
export class TestRxjs16SubjectComponent implements AfterViewInit{
  idConsola01:string="";
  idConsola02:string="";
  idConsola03:string="";
  idConsola04:string="";
  idBtnTestSubj:string="";

  divConsola01?:HTMLDivElement;
  divConsola02?:HTMLDivElement;
  divConsola03?:HTMLDivElement;
  divConsola04?:HTMLDivElement;
  btnTestSubj?:HTMLButtonElement;

  consola01?:ConsolaHtml;
  consola02?:ConsolaHtml;
  consola03?:ConsolaHtml;
  consola04?:ConsolaHtml;

  colorConsola01:string="Lime";
  colorConsola02:string="LightGreen";
  colorConsola03:string="DeepSkyBlue";
  colorConsola04:string="LightSkyBlue";

  constructor(){
    let numRandom = Math.trunc(Math.random()*1000);
    this.idConsola01 = "consola01" + numRandom;
    this.idConsola02 = "consola02" + numRandom;
    this.idConsola03 = "consola03" + numRandom;
    this.idConsola04 = "consola04" + numRandom;
    this.idBtnTestSubj = "btnTestSubj" + numRandom;
  }

  ngAfterViewInit(): void {
    this.btnTestSubj = document.getElementById(this.idBtnTestSubj) as HTMLButtonElement;
    this.crearConsolas();

//    this.probarSubject01();
    this.probarSubject02();

  }

  probarSubject01(){
    const pulsos$ = interval(1000).pipe(
      map(pulso => Math.round((pulso + 1) * Math.random() * 100)/10),
      take(50)
    );

    const subject = new Subject();

    subject.subscribe(val => this.consola01?.mostrarEnColor(val + ", ",this.colorConsola01));
    subject.subscribe(val => this.consola02?.mostrarEnColor(val + ", ",this.colorConsola02));

    const clicksBtnTestSubj$ = fromEvent(this.btnTestSubj as HTMLElement,"click")
                                .pipe( switchMap(() => { 
                                                           this.limpiarConsolas();
                                                           return pulsos$}) );

    clicksBtnTestSubj$.subscribe (pulsoI => subject.next(pulsoI));

    const clicksBtnTestSubj3$ = fromEvent(this.btnTestSubj as HTMLElement,"click")
                                .pipe( switchMap(() => pulsos$) );

    clicksBtnTestSubj3$.subscribe (val => this.consola03?.mostrarEnColor(val + ", ",this.colorConsola03));
    clicksBtnTestSubj3$.subscribe (val => this.consola04?.mostrarEnColor(val + ", ",this.colorConsola04));

  }
  probarSubject02(){
    const pulsos$ = interval(1000).pipe(
      map(pulso => Math.round((pulso + 1) * Math.random() * 100)/10),
      take(50)
    );

    const subject = new Subject();
    subject.subscribe(val => this.consola01?.mostrarEnColor(val + ", ",this.colorConsola01));
    subject.subscribe(val => this.consola02?.mostrarEnColor(val + ", ",this.colorConsola02));

    const clicksBtnTestSubj$ = fromEvent(this.btnTestSubj as HTMLElement,"click")
                                  .pipe(  tap(() => this.limpiarConsolas()),
                                          switchMap(() => pulsos$)           );

    clicksBtnTestSubj$.subscribe (val => this.consola03?.mostrarEnColor(val + ", ",this.colorConsola03));
    clicksBtnTestSubj$.subscribe (val => this.consola04?.mostrarEnColor(val + ", ",this.colorConsola04));
    clicksBtnTestSubj$.subscribe (subject);
  }
    
  crearConsolas(){
    this.divConsola01 = document.getElementById(this.idConsola01) as HTMLDivElement;
    this.divConsola02 = document.getElementById(this.idConsola02) as HTMLDivElement;
    this.divConsola03 = document.getElementById(this.idConsola03) as HTMLDivElement;
    this.divConsola04 = document.getElementById(this.idConsola04) as HTMLDivElement;

    this.consola01 = new ConsolaHtml();
    this.consola01.setElemHost(this.divConsola01);

    this.consola02 = new ConsolaHtml();
    this.consola02.setElemHost(this.divConsola02);

    this.consola03 = new ConsolaHtml();
    this.consola03.setElemHost(this.divConsola03);

    this.consola04 = new ConsolaHtml();
    this.consola04.setElemHost(this.divConsola04);
  }
  limpiarConsolas(){
    this.consola01?.limpiar();
    this.consola02?.limpiar();
    this.consola03?.limpiar();
    this.consola04?.limpiar();
  }
}
