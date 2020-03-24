import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  private list = [];
  private total=0;
  private totalCount=0;
  
  constructor( private shoppingService: ShoppingCartService) {
    this.list = shoppingService.list;
    this.shoppingService.totalCalculator;
    this.getCountTotal();
   }

  ngOnInit() {  }

  getCountTotal(){
    this.shoppingService.totalCalculator;
    this.totalCount=this.shoppingService.totalCount;
    this.total=this.shoppingService.total;
  }

}
