import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../../../projects/models/project';


@Component({
  selector: 'mybudget-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss'],
})
export class GroupFormComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Output() formData: EventEmitter<{
    name: string;
    color: string;
    icon: string;
    budget: number;
  }> = new EventEmitter();

  @Input() initData: any;

  form: FormGroup;
  private projectsCollection: AngularFirestoreCollection<any>;
  projects: Project[];
  filteredProjects: Project[];

  constructor(private fb: FormBuilder, private afs: AngularFirestore,) {

  }

  get name() {
    return this.form.get('name');
  }

  get project() {
    return this.form.get('project');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      project: ['', [Validators.required]]
    });
    this.form.patchValue(this.initData)

    this.projectsCollection = this.afs.collection<Project>('projects');
    this.projectsCollection.valueChanges({ idField: 'id' }).subscribe(projects => {
      this.projects = projects;
      this.filteredProjects = projects;
    });


    this.project?.valueChanges.subscribe(value => {
      this.filteredProjects = this._filter(value || '')
    });

  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['initData'].currentValue != simpleChanges['initData'].previousValue) {
      this.form?.patchValue(simpleChanges['initData'].currentValue)
    }
  }

  private _filter(value: string): Project[] {
    const filterValue = value.toLowerCase();
    return this.projects?.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    this.formData.emit(this.form.value);
  }
}
