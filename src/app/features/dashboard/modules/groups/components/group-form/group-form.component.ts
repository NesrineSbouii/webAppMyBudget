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
import { Project } from '../../../projects/models/project';
import { ProjectService } from '../../../projects/services/project.service';
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
  projects: Project[];
  filteredProjects: Project[];
  users: User[];
  filteredUsers: User[];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private projectService: ProjectService,
    private router: Router,
  ) {}

  get name() {
    return this.form.get('name');
  }

  get project() {
    return this.form.get('project');
  }

  get members() {
    return this.form.get('members');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      project: ['', [Validators.required]],
      members: [[], [Validators.required]],
    });
    this.form.patchValue(this.initData);

    this.projectService.list()
      .subscribe((projects: Project[]) => {
        this.projects = projects;
        this.filteredProjects = projects;
      });
    this.project?.valueChanges.subscribe((value) => {
      this.filteredProjects = this._filterProjects(value || '');
    });

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

  private _filterProjects(value: string): Project[] {
    const filterValue = value.toLowerCase();
    return this.projects?.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  onSubmit():void {
    this.formData.emit(this.form.value);
  }

  onCancel(): void {
    this.router.navigateByUrl('/dashboard/groups');
  }
}
