import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { GroupService } from '../../../groups/services/group.service';
import { Group } from '../../../models/group';
import { Router } from '@angular/router';
@Component({
  selector: 'mybudget-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Input() initData: any;
  @Output() formData: EventEmitter<{
    name: string;
    budget: number;
    groups: Group ;
  }> = new EventEmitter();


  form: FormGroup ;
  groups: Observable<Group[]>;;

  constructor(private fb: FormBuilder, private groupService: GroupService, private router: Router) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      budget: ['', [Validators.pattern(/\d+/),Validators.required]],
      groups:['']
    });
    this.groups = this.groupService.list()
   }

  ngOnInit(): void {
    this.form.patchValue(this.initData)
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['initData'].currentValue != simpleChanges['initData'].previousValue) {
      this.form?.patchValue(simpleChanges['initData'].currentValue)
    }
  }


  public get name() {
    return this.form.get('name');
  }

  public get budget() {
    return this.form.get('budget');
  }

  onSubmit(): void {
    this.formData.emit(this.form.value);
  }

  onCancel(): void {
    this.router.navigateByUrl('/dashboard/projects');
  }
}
