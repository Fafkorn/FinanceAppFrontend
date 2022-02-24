import { Action, combineReducers, createFeatureSelector } from "@ngrx/store";
import { authFeatureKey, authModuleFeatureKey } from "../feature-keys";
import { AuthReducer } from "./reducers";
import {State } from '../state';

export interface AuthModuleState {
    [authFeatureKey]: AuthReducer.AuthState
}

export function authModuleReducers(state: AuthModuleState | undefined, action: Action) {
    return combineReducers({
        [authFeatureKey]: AuthReducer.authReducer
    })(state, action)
}

export const selectAuthModuleState = createFeatureSelector<State, AuthModuleState> (authModuleFeatureKey)