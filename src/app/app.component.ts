import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from './layout/service/app.layout.service';
import { AccountService } from './service/account.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

    constructor(private primengConfig: PrimeNGConfig,public layoutService: LayoutService, public router: Router, private ngZone: NgZone, private accountService: AccountService) { }

    loggedIn:boolean | undefined;

    ngOnInit() {
        this.checkLoginSession();
        this.primengConfig.ripple = true;
    }
    
    redirect(to:string){
        this.ngZone.run(()=>this.router.navigateByUrl(to).then(()=> {
            window.location.reload();
        }));
    }

    logout(){
        this.accountService.logout().then(response => {
            if(response){
                sessionStorage.removeItem("loggedIn");
                sessionStorage.clear();
                this.redirect("/");
            }
        });
    }

    private checkLoginSession(){
        // console.log(sessionStorage.getItem("loggedIn"));
        this.loggedIn = sessionStorage.getItem("loggedIn") ? true : false;

        // this.accountService.getSession().then(response => {
        //     switch (response.status) {
        //         case 200:
        //             this.loggedIn = true
        //             break;
        //         case 401:
        //             this.loggedIn = false
        //             break;
        //     }
        // });
    }
}
