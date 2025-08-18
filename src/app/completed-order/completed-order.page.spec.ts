import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompletedOrderPage } from './completed-order.page';

describe('CompletedOrderPage', () => {
  let component: CompletedOrderPage;
  let fixture: ComponentFixture<CompletedOrderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
