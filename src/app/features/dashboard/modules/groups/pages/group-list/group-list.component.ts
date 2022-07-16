import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { Column } from 'src/app/shared/models/colum';

@Component({
  selector: 'mybudget-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  columnsDefs: Column[] = [
    { header: 'ID', content: 'id' },
    { header: 'Name', content: 'name' },
    { header: 'Projects', content: 'projects' },
    { header: 'Members', content: 'members' },
  ];
  displayedColumns = ['name', 'projects', 'members', 'actions']
  tableOptions = { actions: [{ name: 'edit', icon: 'edit' }, { name: 'delete', icon: 'delete' }, { name: 'info', icon: 'info' }] };


  constructor(private afs: AngularFirestore, public router: Router, public route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.itemsCollection = this.afs.collection<any>('groups');
    this.items = this.itemsCollection.valueChanges({ idField: 'id' });
  }

  handleCreate(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  handleActionClick(data: any): void {
    const { name, element } = data;

    switch (name) {
      case 'edit': this.router.navigate([element.id, 'edit'], { relativeTo: this.route })
        break;
      case 'delete': this.openDeleteDialog()
        break;
      case 'info': console.log('Infos!!')
        break;
      default:
        break;
    }
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: { title: 'Delete', description: 'Are you sure you want to delete this group?' },
    });

    dialogRef.componentInstance.onDelete.subscribe(() => {
      console.log('On delete group');
    })

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

}
