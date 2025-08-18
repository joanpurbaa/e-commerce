import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationsSettingPage } from './notifications-setting.page';

describe('NotificationsSettingPage', () => {
  let component: NotificationsSettingPage;
  let fixture: ComponentFixture<NotificationsSettingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
