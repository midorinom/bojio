import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromBojioReducer from './reducers/reducer';

export interface State{
    bojioState: fromBojioReducer.State;
}

export const reducers: ActionReducerMap<State>={
    bojioState: fromBojioReducer.reducer,
}

export const getRootState = createFeatureSelector<State>('bojio');
export const getBojioState = createSelector(getRootState, (state:State)=> state.bojioState);

export const validateLogin = createSelector(getBojioState, fromBojioReducer.validateLogin);

export const getIsLoading = createSelector(getBojioState, fromBojioReducer.getIsLoading);