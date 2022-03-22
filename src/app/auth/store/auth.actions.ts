import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../types/actionTypes";

/**
 * Register Action
 */
export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{username: string, email: string, password: string}>()
)