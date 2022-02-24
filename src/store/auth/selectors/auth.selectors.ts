import { createSelector } from "@ngrx/store";
import { selectAuthModuleState } from "../auth-module.state";

export const selectAuthState = createSelector(
    selectAuthModuleState,
    (state) => state.auth
);

export const selectIsAuthenticated = createSelector(
    selectAuthState,
    (state) => state.isAuthenticated
);