import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ErrorListComponent } from "./components/errorList/errorList.components";

@NgModule({
    imports: [CommonModule],
    declarations: [ErrorListComponent],
    exports: [ErrorListComponent]
})

export class SharedModule{}