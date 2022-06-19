import { NgModule } from "@angular/core";
import { MaterialModule } from "./modules/material/material.module";
import { TableModule } from "./modules/table/table.module";

@NgModule({
    imports: SharedModule.MODULE_LIST,
    exports: [ SharedModule.MODULE_LIST],
})


export class SharedModule {

    static readonly MODULE_LIST = [MaterialModule, TableModule]
}