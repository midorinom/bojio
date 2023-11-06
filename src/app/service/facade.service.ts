import { Injectable, NgZone } from '@angular/core';
import { User } from '../interface/user';
import { MessageService } from 'primeng/api';
import { AccountService } from './account.service';
import { Router } from '@angular/router';

@Injectable()
export class FacadeService {

    constructor(private accountService: AccountService, private messageService: MessageService, private ngZone: NgZone, private router: Router){}

    checkLoginStatus(): boolean{
        return sessionStorage.getItem("loggedIn") ? true : false;
    }

    login(loginUser: User) : void{
        this.accountService.login(loginUser).then(response => {
            if(response){

                console.log(response);

                switch(response.status){
                    case 200:
                        sessionStorage.setItem("loggedIn", "true");
                        this.redirectReload("/");
                        break;

                    default:
                        let errorMessage = response.error.message;
                        this.displayToast("error","Oops, Error!", errorMessage, 3000);
                        break;
                }
            }
        });
    }

    register(registerUser: User): void{
        this.accountService.register(registerUser).then(response => {
            if(response){

                this.router.navigateByUrl("login");
            }
        });
    }

    getLoginSession(): void{
        this.accountService.getSession().then(response => {
            switch (response.status) {
                case 200:
                    sessionStorage.setItem("loggedIn", response.body.data);
                    return true;
                case 401:
                    sessionStorage.removeItem("loggedIn");
                    this.router.navigateByUrl('/login');
                    return true;
                default:
                    return false;
            }
        });
    }

    getAnySession():void{
        this.accountService.getSession().then(response => {
            switch (response.status) {
                case 200:
                    sessionStorage.setItem("loggedIn", response.body.data);
                    return false;
                case 401:
                    sessionStorage.removeItem("loggedIn");
                    return true;
                default:
                    return false;
            }
        });
    }

    
    private redirectWithMessage(to:string, severityType: string, title: string, message: string, duration: number){
        this.ngZone.run(()=>this.router.navigateByUrl(to).then(()=> {
            this.displayToast(severityType, title, message, duration);
        }));
    }

    private redirectReload(to: string){
        this.ngZone.run(()=>this.router.navigateByUrl(to).then(()=> {
            window.location.reload();
        }));
    }

    private displayToast(severityType: string, title: string, message: string, duration: number): void{
        this.messageService.add({ severity: severityType, summary: title, detail: message, life: duration });
    }
}