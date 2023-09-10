import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { DemoMessage } from '../interface/demoMessage';

@Injectable()
export class DemoService {

    constructor(private http: HttpClient) { }


    async getMessages() {
        return await lastValueFrom(this.http.get<any>('http://127.0.0.1:8000/demo/get', { observe: 'response' }))
            .then(response => response)
            .catch(error => error)
    }

    async addMessage(message: DemoMessage) {
        return await lastValueFrom(this.http.post<any>('http://127.0.0.1:8000/demo/add', message, { observe: 'response' }))
            .then(response => response)
            .catch(error => error)
    }

    async updateMessage(message: DemoMessage) {
        return await lastValueFrom(this.http.post<any>('http://127.0.0.1:8000/demo/update', message, { observe: 'response' }))
            .then(response => response)
            .catch(error => error)
    }

    async deleteMessage(message: DemoMessage) {
        return await lastValueFrom(this.http.post<any>('http://127.0.0.1:8000/demo/delete', message, { observe: 'response' }))
            .then(response => response)
            .catch(error => error)
    }
}
