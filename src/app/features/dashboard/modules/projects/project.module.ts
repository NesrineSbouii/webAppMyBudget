import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectRoutingModule } from './projects-routing.module';
import { TitleComponent } from 'src/app/shared/components/title/title.component';
@NgModule({
  declarations: [ProjectListComponent],
  entryComponents: [TitleComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
