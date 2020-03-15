import { Component } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service'
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent {

  movie = {}
  count: number;
  constructor(private route: ActivatedRoute, private shoppingService: ShoppingCartService) {
    // console.log(route);
    route.paramMap.subscribe(params => {
      const id = Number(params.get("movieId"))
      // console.log(id);
      let service = new MoviesService();
      service.movieFetch().then((r) => {
        this.movie = r.find(object => object.id === id)
      })
    })
  }

  addToCart() {
    this.shoppingService.updateCount(this.count);
  }



}