import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { Errors } from "src/app/shared/models";
import { CurrentUserInterface } from "src/app/shared/types/auth";
import { UserService } from "../../services/user.service";
import { registerAction } from "../../store/auth.actions";
import { isSubmitting } from "../../store/auth.selectors";
import { RegisterUserInterface } from "../../types/registerUser.interface";

@Component({
    selector: 'auth-register-component',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

    public registerForm: FormGroup = new FormGroup({})
    public errors: Errors = { errors: {} }
    public isSubmitting$: Observable<boolean> = of(false)

    constructor(private formBuilder: FormBuilder, private store: Store, private userService: UserService) { }

    ngOnInit(): void {
        this.initializeRegisterForm()
        this.initializeProperties()
    }

    /**
     * Initialize Register Form
     */
    initializeRegisterForm(): void {
        this.registerForm = this.formBuilder.group({
            username: new FormControl('', [Validators.required, Validators.minLength(7)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(8)])
        })
    }

    initializeProperties(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmitting));
    }

    /**
     * Register
     */
    register(): void {
        let registerUser: RegisterUserInterface = { user: this.registerForm.value }
        this.store.dispatch(registerAction({ request: registerUser }))
        // this.userService.register(registerUser).subscribe({
        //     next: (currentUser: CurrentUserInterface) => console.log(currentUser),
        //     error: (backendErros) => this.errors = backendErros.error
        // })
    }
}