import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AccountService } from 'src/app/service/account.service';
import { User } from 'src/app/interface/user';
import { MessageService } from 'primeng/api';
import { FacadeService } from 'src/app/service/facade.service';

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

    constructor(public layoutService: LayoutService, private facadeService : FacadeService) { }

    ngOnInit(): void {
        this.populateProfileDetails();
    }

    populateProfileDetails(): void{
        let profileDetails : string[] = this.facadeService.getProfileDetails();

        this.username = profileDetails[0];
        this.password = profileDetails[1];
    }

    editProfile():void{
        let registerUser: User = {
            user_id: this.loginUser.user_id,
            username: this.username,
            password: this.password,
            email: this.email,
        }

        this.facadeService.updateProfileDetails(registerUser);
    }

    editPassword(): void{
        let registerUser: User = {
            user_id: this.loginUser.user_id,
            username: this.username,
            password: this.password,
            email: this.email,
        }

        this.facadeService.updatePassword(registerUser);
    }

}
