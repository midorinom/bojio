import {Injectable} from '@angular/core';
import * as fromStore from '../index';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ValidateLogin } from '../actions/actions';

@Injectable({
 providedIn:'root',
})

export class BoJioSandBox{
    //For Observables
    readonly isLoading$: Observable<boolean>;
    //readonly getDetails$: Observable<DetailsDto>;

    constructor(private store: Store<fromStore.State>){
        this.isLoading$ = this.store.pipe(select(fromStore.getIsLoading));
    }

    validateLogin(payload: any):void{
        this.store.dispatch(new ValidateLogin(payload));
    }
}

