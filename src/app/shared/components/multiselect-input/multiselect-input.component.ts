import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, OnInit, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, mergeMap, startWith } from 'rxjs/operators';

/**
 * @title Chips Autocomplete
 */
@Component({
  selector: 'multiselect-input',
  templateUrl: 'multiselect-input.component.html',
  styleUrls: ['multiselect-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: MultiSelectInputComponent,
    },
  ],
})
export class MultiSelectInputComponent
  implements OnInit, ControlValueAccessor, Validator
{
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  modelCtrl = new FormControl();
  filteredModels: Observable<string[]>;
  models: string[] = [];
  allModels: Map<string, string> = new Map<string, string>();

  @ViewChild('modelInput') modelInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  @Input('options') optionsObservable: Observable<any>;
  @Input('displayAttr') displayAttr = 'name';
  @Input('valueAttr') valueAttr = 'id';
  @Input('placeholder') placeholder = 'placeholder';

  onChange = (_value: any) => {};

  onTouched = () => {};

  touched = false;
  disabled = false;

  constructor() {
    this.filteredModels = this.modelCtrl.valueChanges.pipe(
      startWith(null),
      map((model: any | null) =>
        model
          ? this._filter(model)
          : this._filterSelected(Array.from(this.allModels.keys()))
      )
    );
  }
  validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }
  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
    disabled ? this.modelCtrl.disable() : this.modelCtrl.enable();
  }

  writeValue(ids: string[]): void {
    this.optionsObservable.subscribe((val: any[]) => {
      this.models = Array.from(this.allModels.entries())
        .filter(([value, id]) => ids.includes(id))
        .map(([value, id]) => value);
    });
  }
  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  mapDisplay(model: any): string {
    return model[this.displayAttr] || '';
  }

  mapValue(model: any): string {
    return model[this.valueAttr] || '';
  }

  ngOnInit() {
    this.optionsObservable.subscribe((val: any[]) => {
      this.allModels = new Map(
        val.map((object) => {
          return [this.mapDisplay(object), this.mapValue(object)];
        })
      );
      this.modelCtrl.setValue(null); //use this to apply changes instantly
    });
  }

  remove(model: string): void {
    this.markAsTouched();
    if (this.disabled) return;
    const index = this.models.indexOf(model);

    if (index >= 0) {
      this.models.splice(index, 1);
    }
    this.onChange(this._getValue());
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.markAsTouched();
    if (this.disabled) return;

    this.models.push(event.option.viewValue);
    this.onChange(this._getValue());
    this.modelInput.nativeElement.value = '';
    this.modelCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this._filterSelected(
      Array.from(this.allModels.keys()).filter(
        (value) => value.toLowerCase().indexOf(filterValue) === 0
      )
    );
  }

  private _filterSelected(array: any[]) {
    return array.filter((value) => !this.models.find((m) => m === value));
  }

  private _getValue() {
    return Array.from(this.allModels.entries())
      .filter(([value, id]) => this.models.includes(value))
      .map(([value, id]) => id);
  }
}
