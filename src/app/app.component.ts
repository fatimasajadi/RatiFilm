import { Component } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    count = ""

    constructor(private shoppingService: ShoppingCartService) {
        shoppingService.subscribeCount((count) => {
            this.count = count;
        })

    }
}