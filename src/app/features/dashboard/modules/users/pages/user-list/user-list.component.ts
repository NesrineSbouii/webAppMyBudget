import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Column } from 'src/app/shared/models/colum';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'mybudget-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  collectionName = 'users';
  items: Observable<any[]>;

  columnsDefs: Column[] = [
    { header: 'FirstName', content: 'firstname' },
    { header: 'LastName', content: 'lastname' },
    { header: 'Email', content: 'email' },
    { header: 'Phone', content: 'phone' },
    { header: 'address', content: 'address' },
  ];
  displayedColumns = ['firstname', 'lastname', 'email', 'phone', 'birthdate', 'address', 'actions'];
  tableOptions = { actions: [{ name: 'edit', icon: 'edit' }, { name: 'delete', icon: 'delete' }, { name: 'info', icon: 'info' }] };

  constructor(public router: Router, public route: ActivatedRoute, public dialog: MatDialog, private userService: UserService) {
  }

  ngOnInit(): void {
    this.items = this.userService.list();
  }

  handleActionClick(data: any): void {
    const { name, element } = data;

    switch (name) {
      case 'edit': this.router.navigate([element.id, 'edit'], { relativeTo: this.route })
        break;
      case 'delete': this.openDeleteDialog(element)
        break;
      case 'info': console.log('Infos!!')
        break;
      default:
        break;
    }
  }

  handleCreate(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  openDeleteDialog(data: User): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: { id: data.id, title: 'Delete', description: 'Are you sure you want to delete this user?' },
    });

    dialogRef.componentInstance.onDelete.subscribe(el => {
      this.userService.delete(el.id);
      dialogRef.close();
    })
  }
}

