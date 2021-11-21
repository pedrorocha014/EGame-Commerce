import { Injectable } from '@angular/core';
import { Games } from '../model/games.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items: Games[] = [];

  addToCart(product: Games) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getTotalCost(){
    return this.items.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  removeFromCart(product: Games){
    const index = this.items.indexOf(product);
    this.items.splice(index, 1);
    return this.items;
  }
}
