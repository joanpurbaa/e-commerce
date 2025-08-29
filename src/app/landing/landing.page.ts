import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: false,
})
export class LandingPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  submitButton() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['signin']);
    }
  }
}
