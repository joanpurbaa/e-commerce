import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavedItemsPage } from './saved-items.page';

describe('SavedItemsPage', () => {
  let component: SavedItemsPage;
  let fixture: ComponentFixture<SavedItemsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
