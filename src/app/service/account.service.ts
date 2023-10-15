import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { DemoMessage } from '../interface/demoMessage';
import { ServiceURL } from './service-config';

@Injectable()
export class AccountService {

    constructor(private http: HttpClient) { }

    async login() {
        return await lastValueFrom(this.http.post<any>(ServiceURL + 'login', { observe: 'response' }))
            .then(response => response)
            .catch(error => error)
    }

    async register(){
        return await lastValueFrom(this.http.post<any>(ServiceURL + 'register', { observe: 'response' }))
        .then(response => response)
        .catch(error => error)
    }
}