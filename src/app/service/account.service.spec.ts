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
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, ToastModule],
            declarations: [AccountService],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: []
        }),
    );

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AccountService);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    
});
