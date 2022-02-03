import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-restaurant-menu',
    templateUrl: './restaurant-menu.component.html',
    styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {
    }

}