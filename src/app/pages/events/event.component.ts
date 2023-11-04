import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'event',
    templateUrl: './event.component.html'
})
export class EventComponent {

    constructor(public layoutService: LayoutService, public router: Router, private ngZone: NgZone) { }
    
    redirect(to:string){
        this.ngZone.run(()=>this.router.navigateByUrl(to).then(()=> {
            window.location.reload();
        }));
    }
}
