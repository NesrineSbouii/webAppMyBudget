import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormCategorieComponent } from './add-form-categorie.component';

describe('AddFormCategorieComponent', () => {
  let component: AddFormCategorieComponent;
  let fixture: ComponentFixture<AddFormCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
