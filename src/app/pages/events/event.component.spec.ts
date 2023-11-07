import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ToastModule } from 'primeng/toast';
import { AccountService } from 'src/app/service/account.service';
import { FacadeService } from 'src/app/service/facade.service';
import { EventComponent } from './event.component';
import { EventService } from 'src/app/service/event.service';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { EditEventComponent } from './edit/edit-event.component';
import { DatePipe } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';

describe('EventComponent', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, ToastModule, DataViewModule, DialogModule, CalendarModule],
            declarations: [EventComponent,EditEventComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [EventService, HttpClient, HttpHandler, DatePipe]
        }),
    );

    it('should create the app', () => {
        const fixture = TestBed.createComponent(EventComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    
});
