import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-homesix-banner',
    templateUrl: './homesix-banner.component.html',
    styleUrls: ['./homesix-banner.component.scss']
})
export class HomesixBannerComponent implements OnInit {

    constructor(
        private viewportScroller: ViewportScroller
    ) { }

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit(): void {
    }

}