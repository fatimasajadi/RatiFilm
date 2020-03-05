import { Component } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts: any[];

  constructor(http: Http) {
    http.get("http://jsonplaceholder.typicode.com/posts").subscribe(response => {
      this.posts = response.json();
    })

  }
}
