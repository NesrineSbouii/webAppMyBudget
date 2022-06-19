import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
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
  displayedColumns = ['name', 'projects', 'members']


  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.itemsCollection = this.afs.collection<any>('groups');
    this.items = this.itemsCollection.valueChanges();
  }

}
