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

  addToCart(newItem) {
    const existingItem = this.list.find(item => item.title === newItem.title);

    if (existingItem) {
      existingItem.count += newItem.count;
    } else {
      this.list.push(newItem);
    }

    // return;
    // var i;
    // for (i = 0; i < this.list.length; i++) {
    //   if(this.list.length === 0){
    //     this.list = this.list.concat(newItem);
    //     console.log("khalie");
    //     console.log(this.list);
    //     console.log(newItem)

    //   }else if(this.list[i].title == newItem.title){
    //     this.list[i].count=this.list[i].count + newItem.count;
    //     console.log("dg khali nis");
    //     console.log(this.list);
    //     console.log(newItem)


    //   }else{
    //     this.list = this.list.concat(newItem);
    //     console.log("akhareshe");
    //     console.log(this.list);
     
    //   }

    // }



  }

  totalCalculator(){
    this.total = 0;
    this.totalCount=0;
    this.list.forEach(item => this.total += item.price * item.count);
    this.list.forEach(item => this.totalCount += item.count);
  }
  
}