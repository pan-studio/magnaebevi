import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-homefour-banner',
    templateUrl: './homefour-banner.component.html',
    styleUrls: ['./homefour-banner.component.scss']
})
export class HomefourBannerComponent implements OnInit {

    constructor(
        private viewportScroller: ViewportScroller
    ) { }

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit(): void {
    }

}