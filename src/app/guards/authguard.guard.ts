import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import magna_const from '../constants/constants';
import { LoginService } from '../services/login.service';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  
  
  constructor(private storageService: StorageService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkUserRole(next);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  checkUserRole(route: ActivatedRouteSnapshot): boolean {
    
    if (this.storageService.isLoggedIn()) {
      let user = this.storageService.getUserData();
      const userRole = user.credenziali.ruolo;
      debugger;
      if (userRole.toLowerCase() == route.data.role.toLowerCase()) {
        return true;
      }
      if(userRole.toLowerCase() == magna_const.ruoli.CLIENTE.toLowerCase()){
        this.router.navigate(['/homepage']);
        return true;
      }

      if(userRole.toLowerCase() == magna_const.ruoli.ADMIN.toLowerCase()){
        this.router.navigate(['/admin']);
        return true;
      }
      return false;
    }

    this.router.navigate(['/']);
    return true;
  }
  
}
