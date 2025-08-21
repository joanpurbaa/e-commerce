import { Component, OnInit } from '@angular/core';
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
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: false,
})
export class SearchPage {
  searchQuery: string = '';
  products: Product[] = [];
  history: string[] = [];

  constructor(private router: Router) {}

  onNotificationClick() {}

  searchProducts() {
    if (!this.searchQuery.trim()) {
      this.products = [];
      return;
    }

    fetch(`https://dummyjson.com/products/search?q=${this.searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        this.products = data.products;

        if (!this.history.includes(this.searchQuery)) {
          this.history.unshift(this.searchQuery);
        }
      });
  }

  clearHistory() {
    this.history = [];
  }

  removeHistoryItem(item: string) {
    this.history = this.history.filter((h) => h !== item);
  }

  goToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}
