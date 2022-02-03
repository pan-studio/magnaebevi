import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import magna_const from 'src/app/constants/constants';
import { Item } from 'src/app/interfaces/item.interface';
import { Menu } from 'src/app/interfaces/menu.interface';
import { MenuServiceService } from 'src/app/services/menu-service.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-restaurant-menu',
    templateUrl: './restaurant-menu.component.html',
    styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {

    constructor(
        public router: Router,
        private menuService: MenuServiceService,
        private storageService: StorageService
    ) { }

    menu! : Menu;
        addToCart(item: Item) {
            this.storageService.addProductToCart(item);
        }
    ngOnInit(): void {
        this.menuService.getMenu(magna_const.menuToLoad).subscribe(res => {
           this.menu = res;
        })

        
    }

}