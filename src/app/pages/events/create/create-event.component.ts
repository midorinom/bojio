import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'create-event',
    templateUrl: './create-event.component.html'
})
export class CreateEventComponent implements OnInit{

    constructor(public layoutService: LayoutService, public router: Router) { }
    
    ngOnInit(): void {
        
    }

}
