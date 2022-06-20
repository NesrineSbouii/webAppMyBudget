import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryFormComponent,
    CategoryEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CategoriesRoutingModule,
    SharedModule
  ]
})
export class CategoriesModule { }
