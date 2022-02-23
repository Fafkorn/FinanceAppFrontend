import { createAction, props } from "@ngrx/store";
import { LoginDto } from "src/api/models";

export const login = createAction('[Auth Actions] Login',
   props<{login: LoginDto}>()
);