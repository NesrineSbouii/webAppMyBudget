import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './users-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserFormComponent } from './components/user-form/user-form.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from 'src/app/shared/components/title/title.component';
import { MatCardModule } from '@angular/material/card';
import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NewUserComponent } from './pages/new-user/new-user.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent,
    EditUserComponent,
    NewUserComponent,
  ],
  entryComponents: [TitleComponent, DeleteDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CategoriesRoutingModule,
    SharedModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class UsersModule { }
