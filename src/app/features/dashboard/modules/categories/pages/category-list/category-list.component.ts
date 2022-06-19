import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { Column } from 'src/app/shared/models/colum';

@Component({
  selector: 'app-category-list',
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
  displayedColumns = ['name', 'budget']


  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.itemsCollection = this.afs.collection<any>('categories');
    this.items = this.itemsCollection.valueChanges();
  }
}
