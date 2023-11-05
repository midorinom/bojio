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
    loadedEventList: boolean = true;
    loadedHostEventList: boolean = false;
    loadedAttendingEventList: boolean = false;

    constructor(public layoutService: LayoutService, public router: Router, private ngZone: NgZone, private eventService: EventService) { }

    ngOnInit(): void {
        this.loadEventList();
    }

    loadEventList(): void{
        this.eventService.getAllAvailableEvents().then(response => {
            if(response){
                this.loadedEventList = true;
                this.loadedHostEventList = false;
                this.loadedAttendingEventList = false;

                this.eventList = response.body.data;
            }
        });
    }

    loadHostingEventList(): void{
        this.eventService.getAllHostedEvents().then(response => {
            if(response){
                this.loadedEventList = false;
                this.loadedHostEventList = true;
                this.loadedAttendingEventList = false;

                this.eventList = response.body.data;
            }
        });
    }

    loadAttendingEventList(): void{
        this.eventService.getAllAttendingEvents().then(response => {
            if(response){
                this.loadedEventList = false;
                this.loadedHostEventList = false;
                this.loadedAttendingEventList = true;

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
