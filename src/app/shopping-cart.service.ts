import { Injectable } from '@angular/core';

const initalCart = JSON.parse(localStorage.getItem('cart') || "[]")

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cb: Function;
  private title: string;
  public total = 0;
  public totalCount = 0;
  public list = initalCart
  constructor() {
  }

  subscribeCart(cb: Function) {
    this.cb = cb;
  }

  addToCart(newItem) {
    const existingItem = this.list.find(item => item.title === newItem.title);

    if (existingItem) {
      existingItem.count += newItem.count;
    } else {
      this.list.push(newItem);
    }

    this.save()
  }



  save() {
    this.total = 0;
    this.totalCount = 0;
    this.list.forEach(item => this.total += item.price * item.count);
    this.list.forEach(item => this.totalCount += item.count);

    
    localStorage.setItem('cart', JSON.stringify(this.list))
    if (this.cb) {
      this.cb()
    }
  }
}

