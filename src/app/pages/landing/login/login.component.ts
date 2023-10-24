import { Component, OnInit } from '@angular/core';
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

    constructor(public layoutService: LayoutService, public router: Router, private accountService: AccountService) { }

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
                console.log(loginResponse)
            }
        });
    }
}
