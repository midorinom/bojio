import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ToastModule } from 'primeng/toast';
import { AppComponent } from 'src/app/app.component';
import { AccountService } from 'src/app/service/account.service';
import { FacadeService } from 'src/app/service/facade.service';

let facadeService : FacadeService;

describe('FacadeService', () => {

    beforeEach(() =>{
        TestBed.configureTestingModule({
            providers: [ FacadeService , AccountService, MessageService, HttpClient, HttpHandler]
        })

        
        facadeService = TestBed.inject(FacadeService);
    });

    it('should create service', () => {
        expect(facadeService).toBeDefined();
    });
    
});
