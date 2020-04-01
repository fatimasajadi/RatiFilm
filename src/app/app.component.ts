import { Component } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    count = 0

    constructor(private shoppingService: ShoppingCartService) {
        this.count = shoppingService.getCount();
        shoppingService.subscribeCart(() => {
            this.count = shoppingService.getCount();
        })

    }
}