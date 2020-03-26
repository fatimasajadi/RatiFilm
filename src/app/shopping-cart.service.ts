import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private count: number = 0
  private cb: Function;
  private title: string;
  public total=0;
  public totalCount=0;
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

  addToCart(item) {
    this.list = this.list.concat(item);
  }

  totalCalculator(){
    this.total = 0;
    this.totalCount=0;
    this.list.forEach(item => this.total += item.price * item.count);
    this.list.forEach(item => this.totalCount += item.count);
  }
  
}