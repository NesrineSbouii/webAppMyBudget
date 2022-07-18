import { NgModule } from "@angular/core";
import { MaterialModule } from "./modules/material/material.module";
import { TableModule } from "./modules/table/table.module";
import { TitleComponent } from "./components/title/title.component";
import { DeleteDialogComponent } from "./components/delete-dialog/delete-dialog.component";
import { CrudService } from "./services/crud.service";
@NgModule({
    declarations: [TitleComponent, DeleteDialogComponent],
    imports: SharedModule.MODULE_LIST,
    exports: [SharedModule.MODULE_LIST, TitleComponent, DeleteDialogComponent],
    providers: [CrudService]
})


export class SharedModule {

    static readonly MODULE_LIST = [MaterialModule, TableModule]
}