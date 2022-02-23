import { Action, combineReducers, createFeature } from "@ngrx/store";
import { authFeatureKey } from "../feature-keys";
import { AuthReducer } from "./reducers";
import { AuthState } from "./reducers/auth.reducer";

export interface AuthModuleState {
    [authFeatureKey]: AuthReducer.AuthState
}

export function authReducers(state: AuthModuleState | undefined, action: Action) {
    return combineReducers({
        [authFeatureKey]: AuthReducer.authReducer
    })(state, action)
}

//export const selectAuthState = createFeature.Selector<AuthState, AuthModuleState> (authFeatureKey)