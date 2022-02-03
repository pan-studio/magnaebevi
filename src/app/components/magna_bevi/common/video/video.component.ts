import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService
    ) { }

    ngOnInit(): void {
    }

}