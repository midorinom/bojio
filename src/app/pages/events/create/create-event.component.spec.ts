import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ToastModule } from 'primeng/toast';
import { AccountService } from 'src/app/service/account.service';
import { FacadeService } from 'src/app/service/facade.service';
import { CreateEventComponent } from './create-event.component';

describe('CreateEventComponent', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, ToastModule],
            declarations: [CreateEventComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [FacadeService, AccountService, MessageService]
        }),
    );

    it('should create the app', () => {
        const fixture = TestBed.createComponent(CreateEventComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    
});
