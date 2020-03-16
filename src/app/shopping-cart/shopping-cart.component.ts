import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  private list;


  constructor(private shoppingService: ShoppingCartService) {

    this.list = shoppingService.list;
    console.log(this.list)
  }

  ngOnInit() {
  }

}