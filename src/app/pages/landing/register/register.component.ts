import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AccountService } from 'src/app/service/account.service';
import { User } from 'src/app/interface/user';

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {

    username: string = "";
    password: string = "";
    email: string = "";

    constructor(public layoutService: LayoutService, public router: Router, private accountService: AccountService) { }

    ngOnInit(): void {
        
    }

    registerButton_Click():void{
        let registerUser: User = {
            username: this.username,
            password: this.password,
            email: this.email,
        }

        

    }
}
