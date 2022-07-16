import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
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
    color: string;
    icon: string;
    budget: number;
  }> = new EventEmitter();

  private usersCollection: AngularFirestoreCollection<any>;

  form: FormGroup;
  users: any;

  constructor(private afs: AngularFirestore, private fb: FormBuilder, private auth: Auth) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      color: [''],
      icon: [''],
      budget: ['', Validators.pattern(/\d+/)],
    });
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


  onSubmit() {
    this.formData.emit(this.form.value);
  }
}
