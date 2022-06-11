import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule  } from "@angular/material/snack-bar";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatToolbarModule } from "@angular/material/toolbar";

export const MODULES = [
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
]
@NgModule({
    imports: MODULES,
    exports: MODULES,
    declarations: []
})

export class MaterialModule { }