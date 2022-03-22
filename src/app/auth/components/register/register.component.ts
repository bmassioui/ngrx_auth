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
            username: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern('^[a-zA-Z0-9]')]), // Only Upper/Lower letters and numbers are allowed
            email: new FormControl('', [Validators.required,Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$')]) // Minimum eight characters, at least one letter and one number
        })
    }

    /**
     * Register
     */
    register(): void{
        // console.log(this.registerForm.value)
        console.log('hellow')
    }
}