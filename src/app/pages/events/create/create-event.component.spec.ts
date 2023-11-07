import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ToastModule } from 'primeng/toast';
import { AccountService } from 'src/app/service/account.service';
import { FacadeService } from 'src/app/service/facade.service';
import { CreateEventComponent } from './create-event.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { EventService } from 'src/app/service/event.service';
import { DatePipe } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';

describe('CreateEventComponent', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, ToastModule, CalendarModule],
            declarations: [CreateEventComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [EventService, HttpClient, HttpHandler, DatePipe]
        }),
    );

    it('should create the app', () => {
        const fixture = TestBed.createComponent(CreateEventComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    
});
