import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCardsPage } from './payment-cards.page';

describe('PaymentCardsPage', () => {
  let component: PaymentCardsPage;
  let fixture: ComponentFixture<PaymentCardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentCardsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
