import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mybudget-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit, OnChanges {
  form: FormGroup;
  @Input() title: string = '';
  @Output() formData: EventEmitter<any> = new EventEmitter();

  @Input() initData: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      birthdate: [''],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
    this.form.patchValue(this.initData)
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if(simpleChanges['initData'].currentValue != simpleChanges['initData'].previousValue) {
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
