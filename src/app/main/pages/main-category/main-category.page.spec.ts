import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCategoryPage } from './main-category.page';

describe('MainCategoryPage', () => {
  let component: MainCategoryPage;
  let fixture: ComponentFixture<MainCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCategoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
