import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectRoutingModule } from './projects-routing.module';
@NgModule({
  declarations: [ProjectListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
