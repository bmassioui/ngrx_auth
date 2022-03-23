import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { registerAction, registerFailureAction, registerSuccessAction } from "./auth.actions";

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
    /**
     * When Register Action is Fired
     */
    on(registerAction, (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true
    })),
    /**
     * When Register Action is Succeeded
     */
    on(registerSuccessAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        currentUser: action.currentUser,
        isLoggedIn: true,
        validationErrors: null
    })),
    /**
     * When Register Action is Failed
     */
    on(registerFailureAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        currentUser: null,
        isLoggedIn: false,
        validationErrors: action.errors
    }))
)

export function reducers(state: AuthStateInterface, action: Action): AuthStateInterface {
    return authReducer(state, action);
}