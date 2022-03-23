import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/auth";
import { UserService } from "../services/user.service";
import { ActionTypes } from "../types/actionTypes";
import { registerSuccessAction, registerFailureAction } from "./auth.actions";

@Injectable()
export class RegisterEffects {

    constructor(private action$: Actions, private userService: UserService) { }

    /**
     * Auth Effect
     */
    register$ = createEffect(() =>
        this.action$.pipe(
            ofType(ActionTypes.REGISTER),
            switchMap(({ request }) => {
                return this.userService.register(request).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        return registerSuccessAction({ currentUser })
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(registerFailureAction({ errors: errorResponse.error }))
                    })
                )
            })
        )
    )
}
