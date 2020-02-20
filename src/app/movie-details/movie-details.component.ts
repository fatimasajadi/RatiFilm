import { Component } from '@angular/core';
import { MoviesService } from '../movies/movies.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent {

  movie = {}
  constructor() {
    const id = 1;
    let service = new MoviesService();
    service.movieFetch().then((r) => {
      this.movie = r.find(object => object.id === id)
    })

  }


}