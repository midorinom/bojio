import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { DemoMessage } from '../interface/demoMessage';
import { ServiceURL } from './service-config';
import { Event } from '../interface/events';

@Injectable()
export class EventService {

    constructor(private http: HttpClient) { }

    async getAllAvailableEvents() {
        return await lastValueFrom(this.http.get<any>(ServiceURL + 'event/all-available-events', { observe: 'response' }))
            .then(response => response)
            .catch(error => error)
    }

    async getAllAttendingEvents() {
        return await lastValueFrom(this.http.get<any>(ServiceURL + 'event/all-attending-events', { observe: 'response' }))
            .then(response => response)
            .catch(error => error)
    }

    async getAllHostedEvents() {
        return await lastValueFrom(this.http.get<any>(ServiceURL + 'event/all-events-as-host', { observe: 'response' }))
            .then(response => response)
            .catch(error => error)
    }

    async createEvent(event: Event) {
        return await lastValueFrom(this.http.post<any>(ServiceURL + 'event/create', event, { observe: 'response' }))
            .then(response => response)
            .catch(error => error)
    }

    async updateEvent(event: Event) {
        return await lastValueFrom(this.http.post<any>(ServiceURL + 'event/update', event, { observe: 'response' }))
            .then(response => response)
            .catch(error => error)
    }

    async deleteEvent(event: Event) {
        return await lastValueFrom(this.http.post<any>(ServiceURL + 'event/delete', event, { observe: 'response' }))
            .then(response => response)
            .catch(error => error)
    }

    async joinEvent(event: Event) {
        return await lastValueFrom(this.http.post<any>(ServiceURL + 'event/join', event, { observe: 'response' }))
            .then(response => response)
            .catch(error => error)
    }

    async quitEvent(event: Event) {
        return await lastValueFrom(this.http.post<any>(ServiceURL + 'event/quit', event, { observe: 'response' }))
            .then(response => response)
            .catch(error => error)
    }
}