import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticadoGuard implements CanActivate, CanActivateChild, CanMatch {
  constructor(private autenticador:AutenticacionService,
              private ruteador:Router){
  }
  canMatch(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.validarOenrutarSiAutenticado(); 
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.validarOenrutarSiAutenticado(); 
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.validarOenrutarSiAutenticado(); 
  }
  validarOenrutarSiAutenticado():boolean | UrlTree{
    if(this.autenticador.yaAutenticado())
      return true;
    else
      return this.ruteador.parseUrl('/login');
  }
  
}
