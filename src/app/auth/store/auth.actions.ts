import { createAction, props } from "@ngrx/store";
import { CurrentUserInterface } from "src/app/shared/types/auth";
import { ActionTypes } from "../types/actionTypes";
import { RegisterUserInterface } from "../types/registerUser.interface";

/**
 * Register Action
 */
export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{ request: RegisterUserInterface }>()
)

/**
 * Register Success
 */
export const registerSuccessAction = createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<{ currentUser: CurrentUserInterface }>()
)

/**
 * Register Failure
 */
export const registerFailureAction = createAction(
    ActionTypes.REGISTER_FAILURE)