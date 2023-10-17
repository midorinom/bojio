import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, map, of, switchMap } from "rxjs";
import { AccountService } from "src/app/service/account.service";
import { BoJioActionTypes, ValidateLogin, ValidateLoginSuccess } from "../actions/actions";
import { validateLogin } from "..";

@Injectable()
export class BojioEffects{

    constructor(
        private actions$: Actions,
        private accountHttpService:AccountService,
    ){}

    validateLogin$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(BoJioActionTypes.VALIDATE_LOGIN),
            map((action: ValidateLogin) => action.payload),
            switchMap(()=>
                this.accountHttpService.login().pipe(
                    map((data:any) => new ValidateLoginSuccess(data)),
                    catchError((error:any) => of(error))
                )
            )
        )
    });
}