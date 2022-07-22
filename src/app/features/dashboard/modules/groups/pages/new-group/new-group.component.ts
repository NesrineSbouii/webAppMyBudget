import { Component, Input, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss'],
})
export class NewGroupComponent implements OnInit {
  id: string;
  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;

  constructor(private afs: AngularFirestore, private router: Router, private route: ActivatedRoute, private groupService: GroupService) { }

  ngOnInit(): void {
  }

  handleCreate(item: any): void {
    this.groupService.add(item);
    this.router.navigate(['/dashboard/groups']);
  }
}
