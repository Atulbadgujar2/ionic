import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentCardPage } from './add-payment-card.page';

describe('AddPaymentCardPage', () => {
  let component: AddPaymentCardPage;
  let fixture: ComponentFixture<AddPaymentCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPaymentCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaymentCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
