import { authReducers, AuthModuleState } from './auth/auth-module.state';
import * as fromRouter from '@ngrx/router-store';
import { authFeatureKey, authModuleFeatureKey } from './feature-keys';
import { InjectionToken } from '@angular/core';
import { Action, ActionReducer, ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { OidcActions } from 'ng-oidc-client';

export interface State {
    [authModuleFeatureKey]: AuthModuleState;
    router: fromRouter.RouterReducerState<any>;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>('Root reducers token', {
    factory: () => ({
        [authModuleFeatureKey]: authReducers,
        router: fromRouter.routerReducer
    })
});

export function clearStateMetaReducer(reducer) {
    return function(state: State, action: Action) {
        return reducer(action.type === OidcActions.OidcActionTypes.OnUserSignedOut ? undefined: state, action);
    }
}

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return (state, action) => {
        const result = reducer(state, action);
        console.groupCollapsed(action.type);
        console.log('prev state', state);
        console.log('action state', action);
        console.log('next state', result);
        console.groupEnd();
        return result;
    }
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: [{auth: ['user']}],
        rehydrate: true
    })(reducer);
}

export const metaReducers: MetaReducer<State>[] = [logger, localStorageSyncReducer, clearStateMetaReducer];

export const selectRouter = createFeatureSelector<State, fromRouter.RouterState>('router');

//export const { selectRouteData } = fromRouter.getSelectors(selectRouter);