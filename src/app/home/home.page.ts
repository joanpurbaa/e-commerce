import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  products: Product[] = [];
  searchQuery: string = '';
  presentingElement!: HTMLElement | null;

  constructor(private router: Router) {}

  ngOnInit() {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        this.products = data.products;
      });

    this.presentingElement = document.querySelector('.ion-page');
  }

  searchProducts() {
    if (!this.searchQuery.trim()) {
      return;
    }

    fetch(`https://dummyjson.com/products/search?q=${this.searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        this.products = data.products;
        console.log(this.products);
      });
  }

  goToNotification() {
    this.router.navigate(['/notifications']);
  }

  goToSearch() {
    this.router.navigate(['/search']);
  }

  goToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}
