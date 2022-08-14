import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { NewCategoryComponent } from './pages/new-category/new-category.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent,
  },
  {
    path: '',
    children: [
      {
        path: 'new',
        component: NewCategoryComponent,
      },
      {
        path: ':id/edit',
        component: EditCategoryComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule { }
