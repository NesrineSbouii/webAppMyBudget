import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { NewUserComponent } from './pages/new-user/new-user.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: '',
    children: [
      {
        path: 'new',
        component: NewUserComponent,
      },
      {
        path: ':id/edit',
        component: EditUserComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule { }
