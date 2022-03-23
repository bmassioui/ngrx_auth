import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "../shared/shared.module";

import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { UserService } from "./services/user.service";
import { reducers } from "./store/auth.reducer";

const authRoutes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]

@NgModule({
    imports: [CommonModule,
        RouterModule.forChild(authRoutes),
        ReactiveFormsModule,
        SharedModule,
        StoreModule.forFeature('auth', reducers)
    ],
    declarations: [RegisterComponent, LoginComponent],
    providers: [UserService]
})
export class AuthModule { }