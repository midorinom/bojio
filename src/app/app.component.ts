import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from './layout/service/app.layout.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

    constructor(private primengConfig: PrimeNGConfig,public layoutService: LayoutService, public router: Router, private ngZone: NgZone) { }

    ngOnInit() {
        this.checkLoginSession();
        this.primengConfig.ripple = true;
    }
    
    redirect(to:string){
        this.ngZone.run(()=>this.router.navigateByUrl(to).then(()=> {
            window.location.reload();
        }));
    }

    private checkLoginSession(){
        console.log("Checked");
    }
}
