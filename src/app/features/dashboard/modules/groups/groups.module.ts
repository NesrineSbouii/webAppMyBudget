import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './pages/group-list/group-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GroupsdRoutingModule } from './groups-routing.module';
import { TitleComponent } from 'src/app/shared/components/title/title.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NewGroupComponent } from './pages/new-group/new-group.component';
import { EditGroupComponent } from './pages/edit-group/edit-group.component';
import { GroupFormComponent } from './components/group-form/group-form.component';
import { MatCardModule } from '@angular/material/card';
import { GroupService } from './services/group.service';

@NgModule({
  declarations: [
    GroupListComponent,
    NewGroupComponent,
    EditGroupComponent,
    GroupFormComponent,
  ],
  entryComponents: [TitleComponent],
  imports: [
    CommonModule,
    SharedModule,
    GroupsdRoutingModule,
    MatDialogModule,
    MatCardModule,
  ],
  providers: [GroupService]
})
export class GroupsModule {}
