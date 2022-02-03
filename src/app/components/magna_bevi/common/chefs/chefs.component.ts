import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-chefs',
    templateUrl: './chefs.component.html',
    styleUrls: ['./chefs.component.scss']
})
export class ChefsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    chefsSlides: OwlOptions = {
		margin: 25,
		nav: false,
		loop: true,
		dots: true,
		autoplay: true,
        mouseDrag: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='icofont-double-left'></i>",
			"<i class='icofont-double-right'></i>",
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
    }

}