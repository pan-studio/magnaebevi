import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-hometwo-banner',
    templateUrl: './hometwo-banner.component.html',
    styleUrls: ['./hometwo-banner.component.scss']
})
export class HometwoBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    homeSlides: OwlOptions = {
        items: 1,
		margin: 0,
		nav: true,
		loop: true,
		dots: false,
		autoplay: true,
        mouseDrag: true,
        smartSpeed: 700,
		autoplayHoverPause: true,
		navText: [
			"<i class='icofont-double-left'></i>",
			"<i class='icofont-double-right'></i>",
		]
    }

}