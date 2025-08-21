import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false,
})
export class CartPage implements OnInit {
  cart: any[] = [];

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeFromCart(id: number) {
    this.cart = this.cart.filter((item) => item.id !== id);
    this.saveCart();
  }

  increaseQty(id: number) {
    let item = this.cart.find((p) => p.id === id);
    if (item) {
      item.quantity += 1;
      this.saveCart();
    }
  }

  decreaseQty(id: number) {
    let item = this.cart.find((p) => p.id === id);
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        this.removeFromCart(id);
      }
      this.saveCart();
    }
  }

  getSubTotal() {
    return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
}
