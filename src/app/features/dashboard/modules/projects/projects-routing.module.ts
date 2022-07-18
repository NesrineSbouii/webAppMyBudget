import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectListComponent,
  },
  {
    path: '',
    children: [
      { path: 'new', component: NewProjectComponent },
      { path: ':id/edit', component: EditProjectComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
