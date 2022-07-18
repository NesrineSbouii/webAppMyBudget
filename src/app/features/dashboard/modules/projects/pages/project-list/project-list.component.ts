import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { Column } from 'src/app/shared/models/colum';

@Component({
  selector: 'mybudget-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  // items = [{ id: 1, name: 'Imen', budget: '12332', members: ["https://www.therconline.com/wp-content/uploads/2022/05/Does-Facebook-have-the-%E2%80%98New-Profile-Pic-feature-as-app-goes-viral-1.png", "https://www.therconline.com/wp-content/uploads/2022/05/Does-Facebook-have-the-%E2%80%98New-Profile-Pic-feature-as-app-goes-viral-1.png", "https://www.therconline.com/wp-content/uploads/2022/05/Does-Facebook-have-the-%E2%80%98New-Profile-Pic-feature-as-app-goes-viral-1.png"] }]
  columnsDefs: Column[] = [
    { header: 'ID', content: 'id' },
    { header: 'Project Name', content: 'name' },
    { header: 'Project Budget', content: 'budget' }
  ];
  displayedColumns = ['name', 'budget', 'members', 'actions'];
  tableOptions = { actions: [{ name: 'edit', icon: 'edit' }, { name: 'delete', icon: 'delete' }, { name: 'info', icon: 'info' }] };

  constructor(private afs: AngularFirestore, public router: Router, public route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.itemsCollection = this.afs.collection<any>('projects');
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
