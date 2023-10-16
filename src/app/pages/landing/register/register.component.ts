import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit{

    constructor(public layoutService: LayoutService, public router: Router) { }

    ngOnInit(): void {
        
    }
    
}
