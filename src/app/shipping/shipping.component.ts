import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  private list = [];
  
  constructor( private shoppingService: ShoppingCartService) {
    this.list = shoppingService.list;
    

   }

  ngOnInit() {
  }

}
