import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from '../../../projects/models/project';
import { ProjectService } from '../../../projects/services/project.service';

@Component({
  selector: 'mybudget-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit, OnChanges {
  form: FormGroup;
  projects: Project[];
  @Input() title: string = '';
  @Output() formData: EventEmitter<{
    name: string;
    color: string;
    icon: string;
    budget: number;
    project: string;
  }> = new EventEmitter();

  @Input() initData: any;

  constructor(private fb: FormBuilder, private router: Router, private projectService: ProjectService) {  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      color: [''],
      icon: [''],
      project: ['', [Validators.required]],
      budget: ['', Validators.pattern(/\d+/)],
    });
    this.form.patchValue(this.initData)
    this.projectService.list()
      .subscribe((projects: Project[]) => {
        this.projects = projects;
      });
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['initData'].currentValue != simpleChanges['initData'].previousValue) {
      this.form?.patchValue(simpleChanges['initData'].currentValue)
    }
  }

  public get name() {
    return this.form.get('name');
  }
  
  onSubmit() {
    this.formData.emit(this.form.value);
  }

  onCancel(): void {
    this.router.navigateByUrl('/dashboard/categories');
  }
}
