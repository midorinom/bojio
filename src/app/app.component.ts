import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from './layout/service/app.layout.service';
import { AccountService } from './service/account.service';
import { FacadeService } from './service/facade.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

    constructor(private primengConfig: PrimeNGConfig,public layoutService: LayoutService, public facadeService: FacadeService) { }

    loggedIn:boolean | undefined;

    ngOnInit() {
        this.checkLoginSession();
        this.primengConfig.ripple = true;
    }

    logout(){
        this.facadeService.logout();
    }

    private checkLoginSession(){
        this.loggedIn = this.facadeService.checkLoginStatus();
    }
}
