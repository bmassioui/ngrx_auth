import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./components/register/register.component";

const authRoutes : Routes = [
    {
        path: 'register',
        component: RegisterComponent
    }
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(authRoutes)]
})
export class AuthModule{}