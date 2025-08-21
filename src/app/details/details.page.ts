import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: false,
})
export class DetailsPage {
  product: any;
  isSaved: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.product = data;
      });
  }

  toggleWishlist() {
    let saved = JSON.parse(localStorage.getItem('saved') || '[]');

    if (this.isSaved) {
      saved = saved.filter((item: any) => item.id !== this.product.id);
      this.isSaved = false;
    } else {
      saved.push(this.product);
      this.isSaved = true;
    }

    localStorage.setItem('saved', JSON.stringify(saved));
  }

  checkSaved() {
    let saved = JSON.parse(localStorage.getItem('saved') || '[]');
    this.isSaved = saved.some((item: any) => item.id === this.product.id);
  }

  addToCart(product: any) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    let existing = cart.find((item: any) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity: 1,
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
