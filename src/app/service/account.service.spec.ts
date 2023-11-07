import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ToastModule } from 'primeng/toast';
import { AppComponent } from 'src/app/app.component';
import { AccountService } from 'src/app/service/account.service';
import { FacadeService } from 'src/app/service/facade.service';

describe('AccountService', () => {
    let accountService : AccountService;

    beforeEach(() =>{
        TestBed.configureTestingModule({
            providers: [  AccountService, MessageService, HttpClient, HttpHandler]
        })

        
        accountService = TestBed.inject(AccountService);
    });

    it('should create the app', () => {
        expect(accountService).toBeDefined();
    });
    
});
