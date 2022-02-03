import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import magna_const from 'src/app/constants/constants';
import { Item } from 'src/app/interfaces/item.interface';
import { MenuServiceService } from 'src/app/services/menu-service.service';

@Component({
    selector: 'app-offer',
    templateUrl: './offer.component.html',
    styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

    constructor(private menuService: MenuServiceService) { }


		items: Item[] = [];



    ngOnInit(): void {
			this.menuService.getMenu(magna_const.menuToLoad).subscribe(res => {
				res.sezioni.forEach(sezione => {
					sezione.items.forEach(item => {
						debugger;
						this.items.push(item);
					})
				})
			})
    }

    offerSlides: OwlOptions = {
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
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1200: {
				items: 2
			}
		}
    }

}