import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AccountService } from 'src/app/service/account.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{

    username: string = ""
    password: string = ""

    constructor(public layoutService: LayoutService, public router: Router, private accountService: AccountService,private ngZone: NgZone) { }

    ngOnInit(): void {
        
    }

    loginButton_Click(){
        let loginResponse : any;

        let loginUser: User = {
            username: this.username,
            password: this.password,
            email: '',
        }

        this.accountService.login(loginUser).then(response => {
            if(response){
                loginResponse = response;

                console.log(response);
                
                let responseStatus = response.body.status;
                console.log(responseStatus);
                let responseMessage = response.body.message;
                console.log(responseMessage);

                if(responseStatus!="error"){
                    sessionStorage.setItem("loggedIn", "true");
                    this.redirect("/");
                }else{

                }
            }
        });
    }

    redirect(to:string){
        this.ngZone.run(()=>this.router.navigateByUrl(to).then(()=> {
            window.location.reload();
        }));
    }
}
