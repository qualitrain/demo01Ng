import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, interval, map, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-test-rxjs12-b',
  templateUrl: './test-rxjs12-b.component.html',
  styleUrls: ['./test-rxjs12-b.component.css']
})
export class TestRxjs12BComponent implements AfterViewInit, OnDestroy, OnInit {

  divElipseSwitchMap?:HTMLDivElement;
  nClicksEnElipse:number=0;
  idElipseSM:string="";

  suscrContador?: Subscription;

  ngOnInit(){
    this.idElipseSM = Math.round( Math.random() * 1000 ) + "idElipseSM";
  }

  ngAfterViewInit(): void {
    this.divElipseSwitchMap = document.getElementById(this.idElipseSM) as HTMLDivElement;
    this.testSwitchMap();
  }
  ngOnDestroy(): void {
    this.suscrContador?.unsubscribe();
  }
 
  testSwitchMap(){
    const clicsDiv02$ = fromEvent(this.divElipseSwitchMap as HTMLElement,'click');
    const numeros$ = interval(500).pipe(
      map( n => n+1)
    );

    const clicksEnNumeros$ = clicsDiv02$.pipe(
      switchMap(() => numeros$)
    )
    this.suscrContador = clicksEnNumeros$.subscribe( n => this.nClicksEnElipse = n);
    clicksEnNumeros$.subscribe( n => console.log);
  }

}
