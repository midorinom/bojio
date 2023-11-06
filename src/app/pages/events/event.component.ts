import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Event } from 'src/app/interface/events';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { EventService } from 'src/app/service/event.service';

@Component({
    selector: 'event',
    templateUrl: './event.component.html',
    providers: [MessageService]
})
export class EventComponent implements OnInit{

    eventList: Event[] = [];
    loadedEventList: boolean = true;
    loadedHostEventList: boolean = false;
    loadedAttendingEventList: boolean = false;
    showDeleteEventDialog: boolean = false;
    selectedEvent?: Event

    constructor(public layoutService: LayoutService, public router: Router, private ngZone: NgZone, private eventService: EventService, private messageService: MessageService) { }

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
    
    joinEvent(event: Event) {
        this.eventService.joinEvent(event).then(response => {
            switch (response.status) {
                case 200:
                    // Remove event from list
                    this.eventList = this.eventList.filter(val => val.event_id !== event.event_id);
                    
                    this.messageService.add({ severity: 'success', summary: 'Sign up successful', detail: 'You can find the event in the "Attending Events" tab', life: 3000 });
                    break;
                case 401:
                    this.redirect("/login");
                    break;
                case 400:
                    switch (response.error.message) {
                        case 'event_at_max_capacity':
                            this.messageService.add({ severity: 'error', summary: 'Oops', detail: 'Event capacity has been reached', life: 3000 });
                            
                            // Update to full
                            event.attendees = event.capacity
                            break;
                        case 'event_not_found':
                            this.messageService.add({ severity: 'error', summary: 'Oh no', detail: 'Looks like the host has cancelled the event', life: 3000 });
                            // Remove event from list
                            this.eventList = this.eventList.filter(val => val.event_id !== event.event_id);
                    }
                    break;
                case 500:
                    this.messageService.add({ severity: 'error', summary: 'Unsuccessful', detail: 'An error occurred, please try again', life: 3000 });
                    break;
            }
        });
    }

    quitEvent(event: Event) {
        this.showDeleteEventDialog = true;
        this.selectedEvent = event;
    }

    confirmQuitEvent() {
        this.eventService.quitEvent(this.selectedEvent!).then(response => {
            switch (response.status) {
                case 200:
                    // Remove event from list
                    this.eventList = this.eventList.filter(val => val.event_id !== this.selectedEvent!.event_id);
                    this.showDeleteEventDialog = false;
                    this.messageService.add({ severity: 'success', summary: 'Withdrawal successful', detail: 'If you change your mind, you can find the event in the "All Events" tab', life: 3000 });
                    break;
                case 401:
                    this.redirect("/login");
                    break;
                case 400:
                    switch (response.error.message) {
                        case 'already_withdrawn':
                            // Remove event from list
                            this.eventList = this.eventList.filter(val => val.event_id !== this.selectedEvent!.event_id);
                            this.showDeleteEventDialog = false;
                            this.messageService.add({ severity: 'error', summary: 'Oops', detail: 'Event capacity has been reached', life: 3000 });
                            break;
                        case 'event_not_found':
                            // Remove event from list
                            this.eventList = this.eventList.filter(val => val.event_id !== this.selectedEvent!.event_id);
                            this.showDeleteEventDialog = false;
                            this.messageService.add({ severity: 'error', summary: 'Oh no', detail: 'Looks like the host has cancelled the event', life: 3000 });
                    }
                    break;
                case 500:
                    this.messageService.add({ severity: 'error', summary: 'Unsuccessful', detail: 'An error occurred, please try again', life: 3000 });
                    break;
            }
        });
    }

    redirect(to:string){
        this.ngZone.run(()=>this.router.navigateByUrl(to).then(()=> {
            window.location.reload();
        }));
    }
}
