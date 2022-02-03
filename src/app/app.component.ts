import { Component } from '@angular/core';
import { Router, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import magna_const from './constants/constants';
declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent {
    routerSubscription: any;
    hideNavbar: boolean = false;
    hideFooter: boolean = false;


    constructor(private router: Router) {}

    ngOnInit(){

       
        this.recallJsFuntions();
    }

    recallJsFuntions() {
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
             for(let i = 0; i < magna_const.hideNavbar.length; i++) {
                if(this.router.url == magna_const.hideNavbar[i]) {
                    this.hideNavbar = true;
                }
            }

            for(let i = 0; i < magna_const.hideFooter.length; i++) {
                if(this.router.url == magna_const.hideFooter[i]) {
                    this.hideFooter = true;
                }
            }

 
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}