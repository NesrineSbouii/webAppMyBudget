import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectRoutingModule } from './projects-routing.module';
import { TitleComponent } from 'src/app/shared/components/title/title.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ProjectService } from './services/project.service';

@NgModule({
  declarations: [
    ProjectListComponent,
    NewProjectComponent,
    ProjectFormComponent,
    EditProjectComponent,
  ],
  entryComponents: [TitleComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  providers: [ProjectService]
})
export class ProjectModule { }
