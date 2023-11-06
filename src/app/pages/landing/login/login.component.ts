import { Component, NgZone, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { FacadeService } from 'src/app/service/facade.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{

    username: string = ""
    password: string = ""

    constructor(public layoutService: LayoutService, private facadeService : FacadeService) { }

    ngOnInit(): void {
        
    }

    loginButton_Click(){
        let loginUser: User = {
            username: this.username,
            password: this.password,
            email: '',
        }

        this.facadeService.login(loginUser);
    }

}
