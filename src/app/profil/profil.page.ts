import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: false,
})
export class ProfilPage implements OnInit {
  fullname: string = '';
  email: string = '';
  password: string = '';
  oldEmail: string = '';
  presentingElement!: HTMLElement | null;

  constructor() {}

  ngOnInit() {
    this.loadUserData();
  }

  updateProfile() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    const index = users.findIndex((u: any) => u.email === this.oldEmail);

    if (index !== -1) {
      users[index] = {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
      };

      localStorage.setItem('users', JSON.stringify(users));

      localStorage.setItem('currentUser', JSON.stringify(users[index]));

      if (this.oldEmail !== this.email) {
        localStorage.setItem('token', this.email);
        this.oldEmail = this.email;

        this.loadUserData();
      }
    }
  }

  loadUserData() {
    const storedData = JSON.parse(localStorage.getItem('currentUser') || '');

    this.fullname = storedData.fullname;
    this.email = storedData.email;
    this.password = storedData.password;
    this.oldEmail = storedData.email;
  }
}
