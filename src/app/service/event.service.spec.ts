import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ToastModule } from 'primeng/toast';
import { AppComponent } from 'src/app/app.component';
import { AccountService } from 'src/app/service/account.service';
import { FacadeService } from 'src/app/service/facade.service';
import { EventService } from './event.service';

describe('EventService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, ToastModule],
            declarations: [EventService],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: []
        }),
    );

    it('should create the app', () => {
        const fixture = TestBed.createComponent(EventService);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    
});
