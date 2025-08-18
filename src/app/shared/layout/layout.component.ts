import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: false,
})
export class LayoutComponent implements OnInit {
  showBottomNav: boolean = true;
  showTopHeader: boolean = true;
  title: string = 'App Title';
  showBackButton: boolean = false;
  showRightIcon: boolean = false;
  rightIconName: string = 'notifications-outline';

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateLayoutBasedOnUrl();
      });

    this.updateLayoutBasedOnUrl();
  }

  private updateLayoutBasedOnUrl() {
    const currentUrl = this.router.url;

    this.showTopHeader = true;
    this.showBottomNav = true;
    this.showBackButton = false;
    this.showRightIcon = false;

    if (currentUrl === '/home') {
      this.title = 'Discover';
      this.showTopHeader = false;
      this.showBottomNav = true;
      this.showRightIcon = true;
      this.rightIconName = 'notifications-outline';
    } else if (currentUrl === '/search') {
      this.title = 'Search';
      this.showTopHeader = true;
      this.showBottomNav = true;
      this.showBackButton = true;
      this.showRightIcon = true;
      this.rightIconName = 'notifications-outline';
    } else if (currentUrl === '/notifications') {
      this.title = 'Notifications';
      this.showTopHeader = true;
      this.showBottomNav = true;
      this.showBackButton = true;
      this.showRightIcon = true;
      this.rightIconName = 'notifications-outline';
    } else if (currentUrl === '/details') {
      this.title = 'Details';
      this.showTopHeader = true;
      this.showBottomNav = false;
      this.showBackButton = true;
      this.showRightIcon = true;
      this.rightIconName = 'notifications-outline';
    } else if (currentUrl === '/saved') {
      this.title = 'Saved Items';
      this.showTopHeader = true;
      this.showBottomNav = true;
      this.showBackButton = true;
      this.showRightIcon = true;
      this.rightIconName = 'notifications-outline';
    } else if (currentUrl === '/reviews') {
      this.title = 'Reviews';
      this.showTopHeader = true;
      this.showBottomNav = false;
      this.showBackButton = true;
      this.showRightIcon = true;
      this.rightIconName = 'notifications-outline';
    } else if (currentUrl === '/cart') {
      this.title = 'My Cart';
      this.showTopHeader = true;
      this.showBottomNav = true;
      this.showBackButton = true;
      this.showRightIcon = true;
      this.rightIconName = 'notifications-outline';
    } else if (currentUrl === '/checkout') {
      this.title = 'Checkout';
      this.showTopHeader = true;
      this.showBottomNav = false;
      this.showBackButton = true;
      this.showRightIcon = true;
      this.rightIconName = 'notifications-outline';
    } else if (currentUrl === '/address') {
      this.title = 'Address';
      this.showTopHeader = true;
      this.showBottomNav = true;
      this.showBackButton = true;
      this.showRightIcon = true;
      this.rightIconName = 'notifications-outline';
    } else if (currentUrl === '/new-address') {
      this.title = 'New Address';
      this.showTopHeader = true;
      this.showBottomNav = false;
      this.showBackButton = true;
      this.showRightIcon = true;
      this.rightIconName = 'notifications-outline';
    } else if (currentUrl === '/payment-method') {
      this.title = 'Peyment Method';
      this.showTopHeader = true;
      this.showBottomNav = false;
      this.showBackButton = true;
      this.showRightIcon = true;
      this.rightIconName = 'notifications-outline';
    } else if (currentUrl === '/new-card') {
      this.title = 'New Card';
      this.showTopHeader = true;
      this.showBottomNav = false;
      this.showBackButton = true;
      this.showRightIcon = true;
      this.rightIconName = 'notifications-outline';
    } else if (currentUrl === '/account') {
      this.title = 'Account';
      this.showTopHeader = true;
      this.showBottomNav = true;
      this.showBackButton = true;
      this.showRightIcon = true;
      this.rightIconName = 'notifications-outline';
    } else if (currentUrl === '/my-orders') {
      this.title = 'My Orders';
      this.showTopHeader = true;
      this.showBottomNav = true;
      this.showBackButton = true;
      this.showRightIcon = true;
      this.rightIconName = 'notifications-outline';
    } else if (currentUrl === '/track-order') {
      this.title = 'Track Order';
      this.showTopHeader = true;
      this.showBottomNav = false;
      this.showBackButton = true;
      this.showRightIcon = true;
      this.rightIconName = 'notifications-outline';
    } else if (currentUrl === '/completed-order') {
      this.title = 'My Orders';
      this.showTopHeader = true;
      this.showBottomNav = true;
      this.showBackButton = true;
      this.showRightIcon = true;
      this.rightIconName = 'notifications-outline';
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  onBackClick() {
    this.location.back();
  }

  onRightIconClick() {
    this.router.navigate(['notifications']);
  }
}
