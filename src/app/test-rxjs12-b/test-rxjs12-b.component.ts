import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { concat, exhaustMap, fromEvent, iif, interval, map, merge, of, Subscription, switchAll, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-test-rxjs12-b',
  templateUrl: './test-rxjs12-b.component.html',
  styleUrls: ['./test-rxjs12-b.component.css']
})
export class TestRxjs12BComponent implements AfterViewInit, OnDestroy, OnInit {

  modo:string="switchMap";
  divElipseSwitchMap?:HTMLDivElement;
  radioSwitchMap?:HTMLInputElement;
  radioSwitchAll?:HTMLInputElement;

  nClicksEnElipse:number=0;
  idElipseSM:string="";
  idRadioSwitchMap:string="";
  idRadioSwitchAll:string="";

  suscrSwitchAll?: Subscription;
  suscrSwitchMap?: Subscription;

  ngOnInit(){
    this.idElipseSM = Math.round( Math.random() * 1000 ) + "idElipse";
    this.idRadioSwitchMap = Math.round( Math.random() * 1000 ) + "idRadioSM";
    this.idRadioSwitchAll = Math.round( Math.random() * 1000 ) + "idRadioSA";
  }

  ngAfterViewInit(): void {
    this.divElipseSwitchMap = document.getElementById(this.idElipseSM) as HTMLDivElement;
    this.radioSwitchMap = document.getElementById(this.idRadioSwitchMap) as HTMLInputElement;
    this.radioSwitchAll = document.getElementById(this.idRadioSwitchAll) as HTMLInputElement;

    let cambios$ = merge( 
            fromEvent(this.radioSwitchAll as HTMLInputElement,"change"),
            fromEvent(this.radioSwitchMap as HTMLInputElement,"change")
          ).pipe( 
             map ( (evtI:Event) => (evtI.target as HTMLInputElement).value )
          );
    
    cambios$.subscribe(val => this.modo = val);
    
  }
  ngOnDestroy(): void {
    this.suscrSwitchAll?.unsubscribe();
    this.suscrSwitchMap?.unsubscribe();

  }
 
  iniciarTest(){
    this.suscrSwitchAll?.unsubscribe();
    this.suscrSwitchMap?.unsubscribe();
    this.nClicksEnElipse = 0;
    if(this.modo === "switchMap")
        this.testSwitchMap();
    else
        this.testSwitchAll();
  }
  testSwitchMap(){
    console.log("testSwitchMap()")

    const clicsDiv02$ = fromEvent(this.divElipseSwitchMap as HTMLElement,'click');

    const numeros$ = interval(150).pipe(
      map( n => n+1),
      take(100)
    );

    const clicksEnNumeros$ = clicsDiv02$.pipe(
      switchMap(() => numeros$)
    )

    this.suscrSwitchMap = clicksEnNumeros$.subscribe( n => this.nClicksEnElipse = n);
  }

  testSwitchAll(){
    console.log("testSwitchAll()")

    const clicsDiv02$ = fromEvent(this.divElipseSwitchMap as HTMLElement,'click');
    const numeros$ = interval(100).pipe(
      map( n => n+1001),
      take(120)
    );

    const clicksEnNumeros$ = clicsDiv02$.pipe(
      map(() => numeros$),
      switchAll()
    )
    this.suscrSwitchAll = clicksEnNumeros$.subscribe( n => this.nClicksEnElipse = n);
  }


}
