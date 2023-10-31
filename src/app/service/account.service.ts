import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { DemoMessage } from '../interface/demoMessage';
import { ServiceURL } from './service-config';
import { User } from '../interface/user';

@Injectable()
export class AccountService {

    constructor(private http: HttpClient) { }

    async login(account: User) {
        return await lastValueFrom(this.http.post<any>(ServiceURL + 'login',account, { observe: 'response' }))
            .then(response => response)
            .catch(error => error)
    }

    async register(account: User){
        return await lastValueFrom(this.http.post<any>(ServiceURL + 'register',account, { observe: 'response' }))
        .then(response => response)
        .catch(error => error)
    }

    async logout(){
        return await lastValueFrom(this.http.get<any>(ServiceURL + 'logout', { observe: 'response' }))
        .then(response => response)
        .catch(error => error)
    }
}