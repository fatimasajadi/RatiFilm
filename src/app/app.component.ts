import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'movieRating';

  movies = [
    {
      image: "1.jpg",
      isLiked: true,
    },
    {
      image: "2.jpg",
      isLiked: true,
    },
    {
      image: "3.jpg",
      isLiked: false,
    },
    {
      image: "4.jpg",
      isLiked: true,
    },
    {
      image: "5.jpg",
      isLiked: true,
    }
  ]


  clickEvent(i) {
    this.movies[i].isLiked = !this.movies[i].isLiked;


  }
}