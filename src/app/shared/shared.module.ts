import { NgModule } from "@angular/core";
import { MaterialModule } from "./modules/material/material.module";

@NgModule({
    imports: SharedModule.MODULE_LIST,
    exports: [ SharedModule.MODULE_LIST],
    declarations:[]
})


export class SharedModule {

    static readonly MODULE_LIST = [MaterialModule]
}