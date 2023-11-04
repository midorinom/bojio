import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ServiceURL } from './service-config';
import { User } from '../interface/user';

@Injectable()
export class AccountService {

    constructor(private http: HttpClient) { }

    async login(account: User) {
        return await lastValueFrom(this.http.post<any>(ServiceURL + 'login',account, { withCredentials: true, observe: 'response' }))
            .then(response => response)
            .catch(error => error)
    }

    async register(account: User){
        return await lastValueFrom(this.http.post<any>(ServiceURL + 'register',account, { withCredentials: true, observe: 'response' }))
        .then(response => response)
        .catch(error => error)
    }

    async logout(){
        return await lastValueFrom(this.http.get<any>(ServiceURL + 'logout', { withCredentials: true, observe: 'response' }))
        .then(response => response)
        .catch(error => error)
    }

    async getProfile(){
        return await lastValueFrom(this.http.get<any>(ServiceURL + 'profile',{ withCredentials: true, observe: 'response' }))
        .then(response => response)
        .catch(error => error)
    }

    async updateProfile(account: User){
        return await lastValueFrom(this.http.post<any>(ServiceURL + 'updateprofile',account, { withCredentials: true, observe: 'response' }))
        .then(response => response)
        .catch(error => error)
    }

    async getSession(){
        return await lastValueFrom(this.http.get<any>(ServiceURL + 'get-session', { withCredentials: true, observe: 'response' }))
        .then(response => response)
        .catch(error => error)
    }
}