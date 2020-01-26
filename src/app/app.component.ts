import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'movieRating';



  images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]

  condition: boolean = true;
  isLiked: boolean = true;
  clickEvent($event) {
    this.condition = !this.condition;
    console.log($event.target.value)
  }
}