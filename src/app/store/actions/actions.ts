import {Action} from '@ngrx/store';


export interface BoJioAction extends Action{
    payload?:any;
}

export enum BoJioActionTypes{
    VALIDATE_LOGIN = '[BoJio] VALIDATE LOGIN',
    VALIDATE_LOGIN_SUCCESS = '[BoJio] VALIDATE LOGIN SUCCESS'
}

export class ValidateLogin implements BoJioAction{
    readonly type = BoJioActionTypes.VALIDATE_LOGIN;
    constructor(public payload:undefined){}
}

export class ValidateLoginSuccess implements BoJioAction{
    readonly type = BoJioActionTypes.VALIDATE_LOGIN_SUCCESS;
    constructor(public payload:boolean){}
}