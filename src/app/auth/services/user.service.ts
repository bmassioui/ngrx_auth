import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/auth";
import { environment } from "src/environments/environment";
import { RegisterUserInterface } from "../types/registerUser.interface";

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) { }

    /**
     * Register new user
     * @param registerUserInterface 
     * @returns 
     */
    register(registerUserInterface: RegisterUserInterface): Observable<CurrentUserInterface> {
        const register_endpoint = `${environment.api_url}/users`
        return this.httpClient.post<CurrentUserInterface>(register_endpoint, registerUserInterface)
    }
}