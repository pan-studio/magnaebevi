import { Component, OnInit } from '@angular/core';
import sidebarAdmin from 'src/app/constants/sidebar-admin';
import { SidebarInterface } from 'src/app/interfaces/sidebar.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarMenu: any = sidebarAdmin;



  public isCollapsed: boolean[] = [
    
  ];


  title = 'mp-admin';

  constructor() {
    for(let i = 0; i < this.sidebarMenu.items.length; i++) {
      this.isCollapsed[i] = true;
    }
  }

  ngOnInit(): void {
  }


}
