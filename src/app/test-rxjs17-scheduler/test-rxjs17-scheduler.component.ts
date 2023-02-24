import { Component, AfterViewInit } from '@angular/core';
import { animationFrameScheduler, asapScheduler, asyncScheduler, interval, pipe, queueScheduler, 
         scheduled, SchedulerAction, SchedulerLike, take, tap } from 'rxjs';

const ANCHO = 800;

@Component({
  selector: 'app-test-rxjs17-scheduler',
  templateUrl: './test-rxjs17-scheduler.component.html',
  styleUrls: ['./test-rxjs17-scheduler.component.css']
})
export class TestRxjs17SchedulerComponent implements AfterViewInit{
  idDiv:string[]=[];
  div:HTMLElement[]=[];

  constructor(){
    for(let i=0; i<6; i++)
      this.idDiv.push("divEjmSched" + Math.trunc(Math.random()*1000));
  }
  ngAfterViewInit(): void {
    for(let i=0; i<6; i++)
        this.div.push(document.getElementById(this.idDiv[i]) as HTMLDivElement);
    this.testSchedulers();
  }

  crearTarea(elemDestino:HTMLElement, max=ANCHO){

    let elem = elemDestino;

    return function tarea(this:SchedulerAction<number>, ancho?:number) { //El metodo schedule de la interface SchedulerAction espera un campo state. En este caso lo usamos para el ancho
        if (ancho === max)
           return;
        elem.style.width = ancho + "px";
        
        this.schedule(ancho! + 1);  // `this` hace referencia a esta misma función, como invocante
        // llamado recursivo
    }
  }

  testSchedulers(){
    this.testAnimationFrameScheduler();
    this.testAsyncScheduler();
    this.testAsapScheduler();
    this.testQueueScheduler();
    this.testIntervalConScheduler(animationFrameScheduler,this.div[4]);
    this.testScheduled(animationFrameScheduler,this.div[5]);
  }
  testAnimationFrameScheduler(){
    let agrandarDiv0 = this.crearTarea(this.div[0]);
    let retraso:number=0;
    let anchoInicial=50;
    animationFrameScheduler.schedule(agrandarDiv0, retraso, anchoInicial);
  }
  testAsyncScheduler(){
    let agrandarDiv1 = this.crearTarea(this.div[1]);
    let retraso:number=0;
    let anchoInicial=0;
    asyncScheduler.schedule(agrandarDiv1, retraso, anchoInicial);
  }   
  testAsapScheduler(){
    let agrandarDiv2 = this.crearTarea(this.div[2]);
    let retraso:number=1000;
    let anchoInicial=0;
    asapScheduler.schedule(agrandarDiv2, retraso, anchoInicial);
  } 
  testQueueScheduler(){
    let agrandarDiv3 = this.crearTarea(this.div[3]);
    let retraso:number=2000;
    let anchoInicial=0;
    queueScheduler.schedule(agrandarDiv3, retraso, anchoInicial);
  }
  testIntervalConScheduler(miScheduler:SchedulerLike,elem:HTMLElement){
    interval(0,miScheduler).pipe( 
           take(ANCHO), 
    )
    .subscribe(val => {
        elem.style.width = val  + 'px';
    });
  }
  testScheduled(miScheduler:SchedulerLike,elem:HTMLElement){
    let nums:number[] = this.getArrSeqNums(25);
    let numeros$ = scheduled( nums, miScheduler);
                
    let consumidor = { next:(val:number) => {
                              elem.style.width = val  + 'px';
                              }, 
                        error: (err:Error) => console.log("Error:"+ err),
                        complete:() => console.log("Fin scheduled")
                     }
    numeros$.subscribe( consumidor );
  }
  getArrSeqNums(desde:number|undefined=0, hasta:number|undefined=ANCHO){
      let nums = [];
      for(let i=desde; i < hasta; i+=2){
          nums.push(i);
      }
      return nums;
  }
}
