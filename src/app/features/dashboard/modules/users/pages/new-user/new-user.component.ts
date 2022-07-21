import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  id: string;
  item: Observable<any>;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  handleCreate(item: User): void {
    this.userService.add(item);
    this.router.navigate(['/dashboard/users']);
  }
}
