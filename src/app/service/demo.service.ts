import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { DemoMessage } from '../interface/demoMessage';
import { ServiceURL } from './service-config';

@Injectable()
export class DemoService {

    constructor(private http: HttpClient) { }

    async getMessages() {
        return await lastValueFrom(this.http.get<any>(ServiceURL + 'demo/get', { observe: 'response' }))
            .then(response => response)
            .catch(error => error)
    }

    async addMessage(message: DemoMessage) {
        return await lastValueFrom(this.http.post<any>(ServiceURL + 'demo/add', message, { observe: 'response' }))
            .then(response => response)
            .catch(error => error)
    }

    async updateMessage(message: DemoMessage) {
        return await lastValueFrom(this.http.post<any>(ServiceURL + 'demo/update', message, { observe: 'response' }))
            .then(response => response)
            .catch(error => error)
    }

    async deleteMessage(message: DemoMessage) {
        return await lastValueFrom(this.http.post<any>(ServiceURL + 'demo/delete', message, { observe: 'response' }))
            .then(response => response)
            .catch(error => error)
    }
}
