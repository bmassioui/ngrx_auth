import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'auth-register-component',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
    public registerForm: FormGroup = new FormGroup({})

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.initializeRegisterForm();
    }
    
    /**
     * Initialize Register Form
     */
    initializeRegisterForm(): void{
        this.registerForm = this.formBuilder.group({
            username: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern('^[a-zA-Z0-9]')]),
            email: new FormControl('', [Validators.required,Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$')])
        })
    }

    /**
     * Register
     */
    register(): void{
        console.log(this.registerForm.value)
    }
}