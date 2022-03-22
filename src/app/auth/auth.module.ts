import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

const authRoutes : Routes = [
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
    imports: [CommonModule, RouterModule.forChild(authRoutes), ReactiveFormsModule],
    declarations: [RegisterComponent, LoginComponent]
})
export class AuthModule{}