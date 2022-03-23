import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { registerAction } from "./auth.actions";

const authInitialState: AuthStateInterface = {
    isSubmitting: false,
    currentUser: null,
    isLoggedIn: false,
    validationErrors: null
}

/**
 * Auth Reducer
 */
const authReducer = createReducer(
    authInitialState,
    on(registerAction, (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true
    }))
)

export function reducers(state: AuthStateInterface, action: Action): AuthStateInterface {
    return authReducer(state, action);
}