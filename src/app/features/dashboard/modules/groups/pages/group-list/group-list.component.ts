import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { Column } from 'src/app/shared/models/colum';
import { Group } from '../../../models/group';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'mybudget-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
})
export class GroupListComponent implements OnInit {
  items: Observable<Group[]>;
  columnsDefs: Column[] = [
    { header: 'ID', content: 'id' },
    { header: 'Name', content: 'name' },
    { header: 'Projects', content: 'projects' },
  ];
  displayedColumns = ['name', 'projects', 'members', 'actions'];
  tableOptions = {
    actions: [
      { name: 'edit', icon: 'edit' },
      { name: 'delete', icon: 'delete' },
      { name: 'info', icon: 'info' },
    ],
  };

  constructor(
    private groupService: GroupService,
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.items = this.groupService.list();
  }

  handleCreate(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  handleActionClick(data: any): void {
    const { name, element } = data;

    switch (name) {
      case 'edit':
        this.router.navigate([element.id, 'edit'], { relativeTo: this.route });
        break;
      case 'delete':
        this.openDeleteDialog(element);
        break;
      case 'info':
        console.log('Infos!!');
        break;
      default:
        break;
    }
  }

  openDeleteDialog(element: Group): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: {
        id: element.id,
        title: 'Delete',
        description: 'Are you sure you want to delete this group?',
      },
    });

    dialogRef.componentInstance.onDelete.subscribe((el) => {
      this.groupService.delete(el.id);
      dialogRef.close();
    });
  }
}
