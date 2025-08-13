import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-tab-bar',
  templateUrl: './bottom-tab-bar.component.html',
  styleUrls: ['./bottom-tab-bar.component.scss'],
  standalone: false
})
export class BottomTabBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
