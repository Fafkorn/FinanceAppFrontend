import { createSelector } from "@ngrx/store";

export const selectAuthState = createSelector(
    selectAuthModuleState,
    (state) => state.authModule.auth
)