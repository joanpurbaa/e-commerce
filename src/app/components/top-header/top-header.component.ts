import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
  standalone: false,
})
export class TopHeaderComponent {
  @Input() title: string = '';
  @Input() showBackButton: boolean = true;
  @Input() showRightIcon: boolean = true;
  @Input() rightIconName: string = 'notifications-outline';
  @Input() backHref: string = '/';
  @Input() useCustomBackAction: boolean = false;

  @Output() backButtonClick = new EventEmitter<void>();
  @Output() rightButtonClick = new EventEmitter<void>();

  constructor(private router: Router, private navControl: NavController) {}

  onBackClick() {
    this.backButtonClick.emit();

    if (
      this.backButtonClick.observers.length === 0 ||
      !this.useCustomBackAction
    ) {
      this.navControl.back();
    }
  }

  onRightIconClick() {
    this.rightButtonClick.emit();
  }
}
