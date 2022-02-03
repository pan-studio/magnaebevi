import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-instagram',
    templateUrl: './instagram.component.html',
    styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    instagramSlides: OwlOptions = {
		margin: 0,
		nav: false,
		loop: true,
		dots: false,
		autoplay: true,
        mouseDrag: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='icofont-double-left'></i>",
			"<i class='icofont-double-right'></i>",
		],
		responsive: {
			0: {
				items: 2
			},
			576: {
				items: 3
			},
			768: {
				items: 4
			},
			992: {
				items: 5
			},
			1200: {
				items: 6
			}
		}
    }

}