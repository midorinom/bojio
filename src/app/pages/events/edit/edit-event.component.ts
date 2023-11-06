import { Component, Input, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Event } from 'src/app/interface/events';
import { EventService } from 'src/app/service/event.service';

@Component({
    selector: 'edit-event',
    templateUrl: './edit-event.component.html',
    providers: [MessageService]
})
export class EditEventComponent implements OnInit{

    @Input() selectedEvent: Event = {}
    @Output() selectedEventChange = new EventEmitter<Event>();
    
    @Input() showEditEventDialog: boolean = false
    @Output() showEditEventDialogChange = new EventEmitter<boolean>();

    title: string = "";
    description: string = "";
    location: string = "";
    startDateEndDate: Date[] = [];
    capacity: number = 0;
    price: number = 0;

    start_date_string: string = ""
    end_date_string: string = ""

    constructor(public layoutService: LayoutService, public router: Router, private ngZone: NgZone, private eventService: EventService, private datepipe: DatePipe, private messageService: MessageService) { }
    
    ngOnInit(): void {
        
    }

    onShow(): void {
        this.title = this.selectedEvent.title!
        this.description = this.selectedEvent.description!
        this.location = this.selectedEvent.location!

        var start_date_parts = this.selectedEvent.start_date!.split('-');
        var end_date_parts = this.selectedEvent.end_date!.split('-');

        this.start_date_string = start_date_parts[1] + '/' + start_date_parts[0] + '/' + start_date_parts[2]
        this.end_date_string = end_date_parts[1] + '/' + end_date_parts[0] + '/' + end_date_parts[2]

        this.startDateEndDate[0] = new Date(this.start_date_string)
        this.startDateEndDate[1] = new Date(this.end_date_string)

        this.capacity = this.selectedEvent.capacity!
        this.price = this.selectedEvent.price!
    }

    updateEvent() {
        let eventWithUpdates: Event = {
            event_id: this.selectedEvent.event_id,
            host_id: this.selectedEvent.host_id,
            title: this.title,
            description: this.description,
            start_date: this.convertDateFormat(this.startDateEndDate[0]) ?? "",
            end_date: this.convertDateFormat(this.startDateEndDate[1]) ?? "",
            location: this.location,
            capacity: this.capacity,
            price: this.price //Math.round(100 * this.price) / 100 // convert to 2 decimal places
        }

        this.eventService.updateEvent(eventWithUpdates).then(response => {
            switch (response.status) {
                case 200:
                    this.selectedEvent.title = this.title
                    this.selectedEvent.description = this.description
                    this.selectedEvent.location = this.location
                    this.selectedEvent.start_date = this.convertDateFormat(this.startDateEndDate[0]) ?? ""
                    this.selectedEvent.end_date = this.convertDateFormat(this.startDateEndDate[1]) ?? "",
                    this.selectedEvent.capacity = this.capacity
                    this.selectedEvent.price = this.price
                    
                    this.closeDialog()
                    this.messageService.add({ severity: 'success', summary: 'Update successful', detail: 'Event has been updated', life: 3000 });
                    break;
                case 401:
                    this.redirect("/login");
                    break;
                case 400:
                    switch (response.error.message) {
                        case 'missing_fields':
                            this.messageService.add({ severity: 'error', summary: 'Missing fields', detail: 'Make sure all fields are completed', life: 3000 });
                            break;
                        case 'start_end_date_before_today':
                            this.messageService.add({ severity: 'error', summary: 'Invalid date', detail: 'Start date and end date cannot be before today', life: 3000 });
                            break;
                        case 'capacity_less_than_attendee':
                            this.messageService.add({ severity: 'error', summary: 'Invalid capacity', detail: 'Capacity cant be lesser than current attendees', life: 3000 });
                            break;
                        case 'incorrect_price':
                            this.messageService.add({ severity: 'error', summary: 'Invalid price', detail: 'Price is invalid, make sure its a number', life: 3000 });
                            break;
                        case 'price_less_than_0':
                            this.messageService.add({ severity: 'error', summary: 'Invalid price', detail: 'Price cannot be lesser than 0', life: 3000 });
                            break;
                    }
                    break;
                case 500:
                    this.messageService.add({ severity: 'error', summary: 'Unsuccessful', detail: 'An error occurred, please try again', life: 3000 });
                    break;
            }
        });
    }

    closeDialog() {
        this.showEditEventDialogChange.emit(this.showEditEventDialog = false);
    }

    convertDateFormat(date : Date){
        let formattedDate = this.datepipe.transform(date, 'dd-MM-YYYY')
        return formattedDate;
    }

    redirect(to:string){
        this.ngZone.run(()=>this.router.navigateByUrl(to).then(()=> {
            window.location.reload();
        }));
    }
}
