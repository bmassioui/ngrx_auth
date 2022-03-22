import { Component, Input } from "@angular/core";
import { Errors } from "src/app/core";

@Component({
    selector: 'shared-errorlist-component',
    templateUrl: './errorList.components.html',
    styleUrls: ['./errorList.components.css']
})

export class ErrorListComponent {

    formattedErrors: Array<string> = []

    /**
     * Set errors
     */
    @Input()
    set errors(errorList: Errors) {
        this.formattedErrors = Object.keys(errorList.errors || {})
            .map(key => `${key} ${errorList.errors[key]}`)
    }

    /**
     * Get Error list
     */
    get errorList(): Array<string> {
        return this.formattedErrors
    }
}