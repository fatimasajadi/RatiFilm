import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'movieRating';
  numberOfLikes;
  isLiked: boolean = true;
  film = ''


  constructor() {
    this.movieFetch();
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

  movieFetch() {
    fetch("assets/data.json").then(response => response.json()).then(obj => {
      this.movies = obj;
    })


  }

  movies = [
    // {
    //   image: "1.jpg",
    //   isFavorite: true,
    //   isLiked: true,
    //   numberOfLikes: 1
    // },
    // {
    //   image: "2.jpg",
    //   isFavorite: true,
    //   isLiked: false,
    //   numberOfLikes: 2
    // },
    // {
    //   image: "3.jpg",
    //   isFavorite: false,
    //   isLiked: true,
    //   numberOfLikes: 3
    // },
    // {
    //   image: "4.jpg",
    //   isFavorite: true,
    //   isLiked: true,
    //   numberOfLikes: 4
    // },
    // {
    //   image: "5.jpg",
    //   isFavorite: true,
    //   isLiked: true,
    //   numberOfLikes: 5
    // }
  ]


  clickEvent(i) {
    this.movies[i].isFavorite = !this.movies[i].isFavorite;


  }
}