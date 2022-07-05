import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Column } from 'src/app/shared/models/colum';

@Component({
  selector: 'mybudget-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<any>;
  // items: Observable<any[]>;
  items = [{ id: 1, name: 'Imen', budget: '12332', members: ["https://www.therconline.com/wp-content/uploads/2022/05/Does-Facebook-have-the-%E2%80%98New-Profile-Pic-feature-as-app-goes-viral-1.png", "https://www.therconline.com/wp-content/uploads/2022/05/Does-Facebook-have-the-%E2%80%98New-Profile-Pic-feature-as-app-goes-viral-1.png", "https://www.therconline.com/wp-content/uploads/2022/05/Does-Facebook-have-the-%E2%80%98New-Profile-Pic-feature-as-app-goes-viral-1.png"] }]
  columnsDefs: Column[] = [
    { header: 'ID', content: 'id' },
    { header: 'Project Name', content: 'name' },
    { header: 'Project Budget', content: 'budget' },
    { header: 'Project Members', content: 'members' },
    { header: '', content: 'actions' },
  ];
  displayedColumns = ['name', 'budget', 'members', 'actions'];
  actions = [{ name: 'edit', icon: 'edit' }, { name: 'delete', icon: 'delete' }, { name: 'info', icon: 'info' }];


  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.itemsCollection = this.afs.collection<any>('projects');
    // this.items = this.itemsCollection.valueChanges();
  }

  handleActionClick(data: any): void {
    console.log({ data });
  }

}
