import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/interface/events';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { EventService } from 'src/app/service/event.service';

@Component({
    selector: 'create-event',
    templateUrl: './create-event.component.html'
})
export class CreateEventComponent implements OnInit{

    title: string = "";
    description: string = "";
    location: string = "";
    startDateEndDate: Date[] = [];
    capacity: number = 0;
    price: number = 0;


    constructor(public layoutService: LayoutService, public router: Router, private eventService: EventService, private datepipe: DatePipe) { }
    
    ngOnInit(): void {
        
    }

    createEventClick():void{
        let startDate: string = this.convertDateFormat(this.startDateEndDate[0]) ?? "";
        let endDate: string = this.convertDateFormat(this.startDateEndDate[1]) ?? ""; 

        console.log(this.startDateEndDate);
        console.log(startDate);
        console.log(endDate);

        let newEvent: Event = {
            title: this.title,
            description: this.description,
            location: this.location,
            start_date: startDate,
            end_date: endDate,
            capacity: this.capacity,
            price: this.price,
        }

        this.eventService.createEvent(newEvent).then(response => {
            if(response){
                console.log(response);
            }
        });
    }

    convertDateFormat(date : Date){
        let formattedDate = this.datepipe.transform(date, 'dd-MM-YYYY')
        return formattedDate;
    }

}
