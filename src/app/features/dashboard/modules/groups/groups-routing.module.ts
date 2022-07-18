import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupListComponent } from './pages/group-list/group-list.component';
import { NewGroupComponent } from './pages/new-group/new-group.component';
import { EditGroupComponent } from './pages/edit-group/edit-group.component';

const routes: Routes = [
  {
    path: '',
    component: GroupListComponent,
  },
  {
    path: '',
    children: [
      {
        path: 'new',
        component: NewGroupComponent,
      },
      {
        path: ':id/edit',
        component: EditGroupComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsdRoutingModule { }
