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
  private list: any[] = [];

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
    this.addToList();
    this.shoppingService.setList(this.list);
    // console.log("hi")
    // console.log(this.list)
  }
  addToList() {
    this.list.push({ count: this.count, title: this.movie.title, price: this.movie.price })
  }

}


