import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material/material.module';
import { MatChipsModule } from '@angular/material/chips';
import { TableModule } from './modules/table/table.module';
import { TitleComponent } from './components/title/title.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { CrudService } from './services/crud.service';
import { MultiSelectInputComponent } from './components/multiselect-input/multiselect-input.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    TitleComponent,
    DeleteDialogComponent,
    MultiSelectInputComponent,
  ],
  imports: SharedModule.MODULE_LIST,
  exports: [
    SharedModule.MODULE_LIST,
    TitleComponent,
    DeleteDialogComponent,
    MultiSelectInputComponent,
  ],
  providers: [CrudService],
})
export class SharedModule {
  static readonly MODULE_LIST = [
    CommonModule,
    MaterialModule,
    TableModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ];
}
