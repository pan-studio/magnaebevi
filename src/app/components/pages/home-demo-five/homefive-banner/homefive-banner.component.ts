import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-homefive-banner',
    templateUrl: './homefive-banner.component.html',
    styleUrls: ['./homefive-banner.component.scss']
})
export class HomefiveBannerComponent implements OnInit {

    constructor(
        private viewportScroller: ViewportScroller
    ) { }

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit(): void {
    }

}