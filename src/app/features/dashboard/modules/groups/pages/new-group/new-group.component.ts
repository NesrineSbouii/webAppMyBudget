import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Group } from '../../../models/group';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss'],
})
export class NewGroupComponent implements OnInit {
  id: string;
  item: Observable<Group>;

  constructor(private groupService: GroupService, private router: Router) {}

  ngOnInit(): void {}

  handleCreate(item: Group): void {
    this.groupService.add(item);
    this.router.navigate(['/dashboard/groups']);
  }
}
