import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mybudget-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit, OnChanges {
  form: FormGroup;
  @Input() title: string = '';
  @Output() formData: EventEmitter<{
    name: string;
    color: string;
    icon: string;
    budget: number;
  }> = new EventEmitter();

  @Input() initData: any;

  constructor(private fb: FormBuilder) {}

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
