import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent,
  },
  {
    path: ':id',
    children: [
      {
        path: 'edit',
        component: CategoryEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
