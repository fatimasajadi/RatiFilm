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
  private total=0;
  private totalCount:number =0;

  constructor(private shoppingService: ShoppingCartService) {
    this.list = shoppingService.list;
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
    this.shoppingService.totalCalculator();
    this.totalCount = this.shoppingService.totalCount;
    this.total = this.shoppingService.total;
  }
}
