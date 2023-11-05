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

    loginUser: User= {
        username: this.username,
        password: this.password,
        email: this.email,
    };

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
                this.username = response.body.data.username;
                this.email = response.body.data.email;
            }
        });
    }

    editProfile():void{
        let registerUser: User = {
            user_id: this.loginUser.user_id,
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

    editPassword(): void{
        let registerUser: User = {
            user_id: this.loginUser.user_id,
            username: this.username,
            password: this.password,
            email: this.email,
        }

        this.accountService.editPassword(registerUser).then(response => {
            if(response){
                console.log(response);
            }
        });
    }

}
