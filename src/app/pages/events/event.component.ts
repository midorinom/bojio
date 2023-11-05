import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/interface/events';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { EventService } from 'src/app/service/event.service';

@Component({
    selector: 'event',
    templateUrl: './event.component.html'
})
export class EventComponent implements OnInit{

    eventList: Event[] = [];

    constructor(public layoutService: LayoutService, public router: Router, private ngZone: NgZone, private eventService: EventService) { }

    ngOnInit(): void {
        this.loadEventList();
    }

    loadEventList(): void{
        this.eventService.getAllAvailableEvents().then(response => {
            if(response){
                console.log(response);

                this.eventList = response.body.data;
            }
        });
    }
    
    redirect(to:string){
        this.ngZone.run(()=>this.router.navigateByUrl(to).then(()=> {
            window.location.reload();
        }));
    }
}
