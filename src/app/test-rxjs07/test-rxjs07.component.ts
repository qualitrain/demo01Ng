import { Component, AfterViewInit } from '@angular/core';
import { filter, find, first, interval, last, map, take, takeLast, tap } from 'rxjs';
import { ConsolaHtml } from '../servicios/consolaHtml';

@Component({
  selector: 'app-test-rxjs07',
  templateUrl: './test-rxjs07.component.html',
  styleUrls: ['./test-rxjs07.component.css'],
  providers: [ConsolaHtml]
})
export class TestRxjs07Component implements AfterViewInit{
  constructor(private consola:ConsolaHtml){
  }
  ngAfterViewInit(): void {
    this.consola.setElemHost(document.getElementById("consolaRxjs7")!);
  }

  testFirst(){
    this.consola.limpiar();

    const primerDivisiblePor5A$ = interval(500).pipe(
                                map ( ()=> Math.trunc( Math.random() * 1000)),
                                tap ( n => this.consola.write("num aleatorio="+n+",")),
                                first( n => n % 5 === 0),
                                );
    // Equivalente a:
    const primerDivisiblePor5B$ = interval(500).pipe(
                            map ( ()=> Math.trunc( Math.random() * 1000)),
                            tap ( n => this.consola.write("num aleatorio="+n+",")),
                            filter( n => n % 5 === 0), //Si no encuentra valor, devuelve error
                            take(1)
                            );
    // Equivalente a:
    const primerDivisiblePor5C$ = interval(500).pipe(
                            map ( ()=> Math.trunc( Math.random() * 1000)),
                            tap ( n => this.consola.write("num aleatorio="+n+",")),
                            filter( n => n % 5 === 0),
                            first()
                            );

     // Equivalente a:
     const primerDivisiblePor5D$ = interval(500).pipe(
                            map ( ()=> Math.trunc( Math.random() * 1000)),
                            tap ( n => this.consola.write("num aleatorio="+n+",")),
                            find( n => n % 5 === 0), //Si no encuentra valor, devuelve undefined
                            );

    primerDivisiblePor5A$.subscribe(num => {
                               this.consola.resaltar("el primer divisible por 5 es "+ num);
                              });
  }

  testLast(base:number){
    this.consola.limpiar();

    const ultimoDivisiblePorBase$ = interval(500).pipe(
                                take(20),
                                map ( ()=> Math.trunc( Math.random() * 1000)),
                                tap ( n => {
                                              this.consola.write("num aleatorio=")
                                              if(n % base == 0)
                                                  this.consola.resaltar(n + ", ");
                                              else
                                                  this.consola.write(n + ", ");
                                           }),
                                last( n => n % base === 0, base * -1),
                                );

    ultimoDivisiblePorBase$.subscribe(num => {
                                    this.consola.writeln(" ");
                                    this.consola.resaltar("ult divisible por " + base 
                                                            + " fue:","white");
                                    this.consola.resaltar("" + num);
                                  });                           
  }
  testTakeLast(base:number,nUlt:number){
    this.consola.limpiar();

    const ultimoDivisiblePorBase$ = interval(500).pipe(
                                take(30),
                                map ( ()=> Math.trunc( Math.random() * 1000)),
                                tap ( n => {
                                  this.consola.write("num aleatorio=")
                                  if(n % base == 0)
                                      this.consola.resaltar(n + ", ");
                                  else
                                      this.consola.write(n + ", ");
                                }),
                                filter( n => n % base === 0),
                                takeLast(nUlt)
                                );

    ultimoDivisiblePorBase$
                  .pipe(map( (n, idx) => { 
                              if(idx == 0){
                                this.consola.writeln(" ");
                                this.consola.resaltar("ultimos "+ nUlt+ " divisibles por " 
                                                       + base  + " fueron:" ,"white");
                              }
                              return n;
                          })
                  ).subscribe( num => {
                                          this.consola.resaltar(num + "");
                                          this.consola.write(", ");
                                      });                            
  }

}
