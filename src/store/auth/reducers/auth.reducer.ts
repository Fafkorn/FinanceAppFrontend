import { createReducer, on } from "@ngrx/store";
import { UserDto } from "src/api/models";
import { AuthApiActions } from "../actions";

export interface AuthState {
    isAuthenticated: boolean;
    user: UserDto;
    token: string;
}

export const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    token: null
}

export const authReducer = createReducer(
     initialState,
     on(AuthApiActions.loginSuccess, (state, { token }) => ({
            ...state,
            token,
            isAuthenticated: true
    })),
);

export const getToken = (state: AuthState) => state.token;
