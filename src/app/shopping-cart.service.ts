import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private count: number = 0
  private cb: Function;
  private title: string;

  public list = []


  constructor() {
  }

  updateCount(count: number) {
    this.count += Number(count);
    this.cb(this.count);
  }

  subscribeCount(cb: Function) {
    this.cb = cb;
  }

  getCount() {
    return this.count;
  }

  setList(list) {
    this.list = this.list.concat(list);
  }
}