import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AccountService } from 'src/app/service/account.service';
import { User } from 'src/app/interface/user';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent {

    username: string = "";
    password: string = "";
    email: string = "";

    loginUser: User | undefined;

    constructor(public layoutService: LayoutService, public router: Router, private accountService: AccountService) { }

    ngOnInit(): void {
        this.verifyLoginDetails();
        this.populateProfileDetails();
    }


    verifyLoginDetails():void{
        try{
            this.loginUser = JSON.parse(sessionStorage["loggedIn"]);

            console.log(this.loginUser);
        }catch{
            this.router.navigateByUrl("/");
        }

    }

    populateProfileDetails(): void{
        this.accountService.getProfile().then(response => {
            if(response){
                this.username = response.data.username;
                this.password = response.data.password;
                this.email = response.data.email;
            }
        });
    }

    editProfile():void{
        let registerUser: User = {
            username: this.username,
            password: this.password,
            email: this.email,
        }

        this.accountService.updateProfile(registerUser).then(response => {
            if(response){
                console.log(response);
            }
        });
    }

}
