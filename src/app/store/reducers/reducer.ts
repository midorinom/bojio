import { BoJioAction, BoJioActionTypes } from "../actions/actions";

export interface State {
    isLoading:boolean;
    validateLoginDto:any;
    validateLoginResponse:boolean;
}

export const initial_state: State = {
    isLoading: false,
    validateLoginDto:undefined,
    validateLoginResponse:false,
}

export const validateLogin = (state: State)=> state.validateLoginDto;
export const getIsLoading = (state: State) => state.isLoading;

export function reducer(state: State = initial_state, action: BoJioAction){
    switch(action.type){
        case BoJioActionTypes.VALIDATE_LOGIN:{
            return{
                ...state,
                validateLoginDto: action.payload,
                isLoading: true,
            }
        }
        case BoJioActionTypes.VALIDATE_LOGIN_SUCCESS{
            return{
                ...state,
                validateLoginResponse: action.payload,
                isLoading: true,
            }
        }
        default:
            return state;
    }
}



