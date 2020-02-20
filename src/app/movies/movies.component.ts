import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent {
  title = 'movieRating';
  numberOfLikes;
  isLiked: boolean = true;
  film = '';


  constructor() {
    let service = new MoviesService();
    service.movieFetch().then(obj => {
      this.movies = obj
    })

  }

  likesCount(j) {
    if (this.movies[j].isLiked) {
      this.movies[j].numberOfLikes = (this.movies[j].numberOfLikes) - 1,
        this.movies[j].isLiked = !this.movies[j].isLiked

    } else {
      this.movies[j].numberOfLikes = (this.movies[j].numberOfLikes) + 1,
        this.movies[j].isLiked = !this.movies[j].isLiked
    }
  }



  movies = [

  ]


  clickEvent(i) {
    this.movies[i].isFavorite = !this.movies[i].isFavorite;
  }

  clickOnMovie(i) {
    this.movies[i]

  }
}