import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from 'src/app/shared/components/title/title.component';
import {MatCardModule} from '@angular/material/card';
import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryFormComponent,
    CategoryEditComponent
  ],
  entryComponents: [TitleComponent, DeleteDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CategoriesRoutingModule,
    SharedModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class CategoriesModule { }
