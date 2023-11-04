import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'create-event',
    templateUrl: './create-event.component.html'
})
export class CreateEventComponent {

    constructor(public layoutService: LayoutService, public router: Router) { }
    
}
