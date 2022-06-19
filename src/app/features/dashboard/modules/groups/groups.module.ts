import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './pages/group-list/group-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GroupsdRoutingModule } from './groups-routing.module';

@NgModule({
  declarations: [
    GroupListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GroupsdRoutingModule
  ]
})
export class GroupsModule { }
