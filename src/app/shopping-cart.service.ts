import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private count: number = 0
  private cb: Function;

  constructor() {
  }

  updateCount(count: number) {
    this.count += Number(count);
    this.cb(this.count);
  }

  subscribeCount(cb: Function) {
    this.cb = cb
  }
}
