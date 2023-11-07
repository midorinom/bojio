import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ToastModule } from 'primeng/toast';
import { AccountService } from 'src/app/service/account.service';
import { FacadeService } from 'src/app/service/facade.service';
import { EditEventComponent } from './edit-event.component';
import { EventService } from 'src/app/service/event.service';
import { CalendarModule } from 'primeng/calendar';
import { DatePipe } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

describe('EditEventComponent', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, ToastModule,CalendarModule, DialogModule],
            declarations: [EditEventComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [EventService, HttpClient, HttpHandler, DatePipe]
        }),
    );

    it('should create the app', () => {
        const fixture = TestBed.createComponent(EditEventComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    
});
