import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { StorageService } from 'src/app/services/storage.service';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

     userdata!: User;
     

    constructor(
        private viewportScroller: ViewportScroller,
        public router: Router,
        private storage: StorageService
    ) {}

    logout() {
        this.storage.removeUserData();
        this.router.navigateByUrl('/login');
    }

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit(): void {
        this.userdata =  this.storage.getUserData();
    }
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}