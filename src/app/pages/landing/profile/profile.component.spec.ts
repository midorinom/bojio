import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ToastModule } from 'primeng/toast';
import { AppComponent } from 'src/app/app.component';
import { AccountService } from 'src/app/service/account.service';
import { FacadeService } from 'src/app/service/facade.service';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, ToastModule],
            declarations: [ProfileComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [FacadeService, AccountService, MessageService, HttpClient, HttpHandler]
        }),
    );

    it('should create the app', () => {
        const fixture = TestBed.createComponent(ProfileComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    
});
