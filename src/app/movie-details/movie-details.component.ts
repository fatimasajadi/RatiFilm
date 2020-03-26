import { Component } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service'
import { Movie } from 'src/types';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  private movie;
  count: number;

  constructor(private route: ActivatedRoute, private shoppingService: ShoppingCartService) {
   
    route.paramMap.subscribe(params => {
      const id = Number(params.get("movieId"))
     
      let service = new MoviesService();
      service.movieFetch().then((r) => {
        this.movie = r.find(object => object.id === id)
      })
    })
  }

  addToCart() {
    this.shoppingService.updateCount(this.count);
    const newItem = { count: Number(this.count), title: this.movie.title, price: this.movie.price };
    this.shoppingService.addToCart(newItem);
  }


}


