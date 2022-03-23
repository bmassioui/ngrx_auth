import { Errors } from "src/app/shared/models";
import { CurrentUserInterface } from "src/app/shared/types/auth";

export interface AuthStateInterface{
    isSubmitting : boolean,
    currentUser: CurrentUserInterface | null,
    isLoggedIn: boolean | false,
    validationErrors: Errors | null
}