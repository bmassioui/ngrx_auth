import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../types/actionTypes";
import { RegisterUserInterface } from "../types/registerUser.interface";

/**
 * Register Action
 */
export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{request : RegisterUserInterface}>()
)