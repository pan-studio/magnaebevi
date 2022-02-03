import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    feedbackSlides: OwlOptions = {
        items: 1,
		margin: 0,
		nav: false,
		loop: true,
		dots: true,
		autoplay: true,
        mouseDrag: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='icofont-double-left'></i>",
			"<i class='icofont-double-right'></i>",
		]
    }

}