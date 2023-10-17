import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { ServiceURL } from './service-config';

@Injectable()
export class AccountService {

    constructor(private http: HttpClient) { }

    login() {
        return this.http.post<any>(ServiceURL + 'login',{title: 'login'});
    }

    async register(){
        return await lastValueFrom(this.http.post<any>(ServiceURL + 'register', { observe: 'response' }))
        .then(response => response)
        .catch(error => error)
    }
}