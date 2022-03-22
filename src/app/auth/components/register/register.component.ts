import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Errors } from "src/app/core";

@Component({
    selector: 'auth-register-component',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

    public registerForm: FormGroup = new FormGroup({})
    public errors: Errors = { errors: {} };
    public isSubmitting: boolean = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.initializeRegisterForm();
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

    /**
     * Register
     */
    async register(): Promise<void> {
        // console.log(this.registerForm.value)
        this.isSubmitting = true

        await new Promise(f => setTimeout(f, 2000))

        this.isSubmitting = false

        console.log('hello')
    }
}