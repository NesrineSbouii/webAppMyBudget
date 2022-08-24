import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Group } from '../../../models/group';
import { User } from '../../../users/models/user';
import { UserService } from '../../../users/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mybudget-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss'],
})
export class GroupFormComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Output() formData: EventEmitter<Group> = new EventEmitter();

  @Input() initData: any;

  form: FormGroup;
  usersList: Observable<User[]>;
  users: User[];
  filteredUsers: User[];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {}

  get name() {
    return this.form.get('name');
  }

  get members() {
    return this.form.get('members');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      members: [[], [Validators.required]],
    });
    this.form.patchValue(this.initData);

    this.usersList = this.userService.list();
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (
      simpleChanges['initData'].currentValue !=
      simpleChanges['initData'].previousValue
    ) {
      this.form?.patchValue(simpleChanges['initData'].currentValue);
    }
  }

  onSubmit():void {
    this.formData.emit(this.form.value);
  }

  onCancel(): void {
    this.router.navigateByUrl('/dashboard/groups');
  }
}
