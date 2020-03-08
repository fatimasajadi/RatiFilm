import { Component } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent {

  movie = {}
  constructor(private route: ActivatedRoute) {
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


}