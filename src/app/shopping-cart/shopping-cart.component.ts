import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  private list = [];
  private count: number = 0;
  // private result: number = 0;
  // private totalPrice: number = 0;
  private total=0;
  private totalCount=0;

  constructor(private shoppingService: ShoppingCartService) {
    this.list = shoppingService.list;
    // this.list.forEach(element => this.result += element.count);
    // this.list.forEach(element => this.totalPrice += (element.price) * (element.count));
    // (this.totalPrice).toFixed(2);
    this.sumCalculator();
  }

  ngOnInit() { }

  addOne(item) {
    item.count += 1;
    this.sumCalculator();
  }

  minusOne(item) {
    item.count -= 1;
    this.sumCalculator();
  }

  sumCalculator() {
    this.total = 0;
    this.totalCount=0;
    this.list.forEach(item => this.total += item.price * item.count);
    this.list.forEach(item => this.totalCount += item.count);
  }
}
