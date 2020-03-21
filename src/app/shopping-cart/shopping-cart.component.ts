import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  private list;
  private count: number = 0;
  private result: number = 0;
  private totalPrice: number = 0;
  finalCount: number;
  // item: number = 0;
  fi: number;


  constructor(private shoppingService: ShoppingCartService) {
    this.list = shoppingService.list;
    this.list.forEach(element => this.result += element.count);
    this.list.forEach(element => this.totalPrice += (element.price) * (element.count));
    (this.totalPrice).toFixed(2);


  }

  ngOnInit() { }

  addOne(item) {
    item.count += 1;
  }

  minusOne(item) {
    item.count -= 1;
  }

  getItem(item) {
    console.log(item)
  }

}
