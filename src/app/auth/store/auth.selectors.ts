import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth')

/**
 * Select isSubmitting's state
 */
export const isSubmitting = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isSubmitting
)