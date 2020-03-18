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


  constructor(private shoppingService: ShoppingCartService) {
    this.list = shoppingService.list;
    this.list.forEach(element => this.result += element.count)

  }

  ngOnInit() { }



}
