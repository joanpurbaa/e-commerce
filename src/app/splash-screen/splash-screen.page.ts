import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
  standalone: false,
})
export class SplashScreenPage implements OnInit {
  loader: boolean = false;

  constructor(private route: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.loader = true;
    }, 3000);

    setTimeout(() => {
      this.route.navigate(['landing']);
    }, 6000);
  }
}
