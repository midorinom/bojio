import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'edit-event',
    templateUrl: './edit-event.component.html'
})
export class EditEventComponent implements OnInit{

    constructor(public layoutService: LayoutService, public router: Router) { }
    
    ngOnInit(): void {
        
    }

}
