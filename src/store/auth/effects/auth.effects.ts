import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from "rxjs/operators";
import { AuthService } from "src/api/services";
import { LoginPageActions } from "../actions";

@Injectable()
export class AuthEffects {

    constructor(private authService: AuthService, private actions$: Actions) {

    }

}