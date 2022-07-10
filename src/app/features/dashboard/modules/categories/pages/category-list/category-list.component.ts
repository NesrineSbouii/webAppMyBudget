import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { Column } from 'src/app/shared/models/colum';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';


@Component({
  selector: 'mybudget-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  columnsDefs: Column[] = [
    { header: 'ID', content: 'id' },
    { header: 'Name', content: 'name' },
    { header: 'Color', content: 'color' },
    { header: 'Icon', content: 'icon' },
    { header: 'Budget', content: 'budget' },
  ];
  displayedColumns = ['id', 'name', 'budget', 'actions'];
  tableOptions = { actions: [{ name: 'edit', icon: 'edit' }, { name: 'delete', icon: 'delete' }, { name: 'info', icon: 'info' }] };

  constructor(private afs: AngularFirestore, public router: Router, public route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.itemsCollection = this.afs.collection<any>('categories');
    this.items = this.itemsCollection.valueChanges({ idField: 'id' });
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

  handleCreate(): void {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: { title: 'Delete', description: 'Are you sure you want to delete this category?' },
    });

    dialogRef.componentInstance.onDelete.subscribe(el => {
      console.log('On delete Catego');
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

