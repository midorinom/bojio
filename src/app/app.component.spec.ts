import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FacadeService } from './service/facade.service';
import { AccountService } from './service/account.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ToastModule } from 'primeng/toast';

describe('AppComponent', () => {

    let component : AppComponent;

    beforeEach(() =>

        TestBed.configureTestingModule({
            imports: [RouterTestingModule, ToastModule],
            declarations: [AppComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [FacadeService, AccountService, HttpClient, HttpHandler, MessageService]
        }),
    );

    beforeEach( function() {
        const fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;

        //window.location = {reload: () => {}} as Location;
        window.onbeforeunload = jasmine.createSpy('');
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;


        expect(app).toBeTruthy();
    });

    it('should call ngOnInit', () => {
        component.ngOnInit();

        expect(component.loggedIn).toBeFalse();
    });

    it('should call ngOnInit while loggedIn', () => {
        spyOn(sessionStorage, 'getItem').and.callFake(() => {
            return 'true';
          });

        component.ngOnInit();

        expect(component.loggedIn).toBeTrue();
    });

    it('should call logout while logout and clear session, logout_positive()', () => {
        
        const sessionStorageSpy = spyOn<any>(sessionStorage, 'clear').and.callThrough();
        
        component.logout();
        spyOn(window.location, 'reload').and.stub();
        expect(sessionStorageSpy).toHaveBeenCalled();
    });
    
});
