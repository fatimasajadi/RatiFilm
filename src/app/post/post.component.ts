import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getposts().subscribe(response => {
      this.posts = response.json();
    }, error => {
      alert("an unexpected error");
      console.log(error)
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value }
    input.value = "";
    this.service.postposts(post).subscribe(response => {
      post.id = response.json().id;
      this.posts.unshift(post);
    }, error => {
      alert("an unexpected error");
      console.log(error)
    });
  }

  updatePost(post) {
    this.service.updateposts(post).subscribe(Response => {
      console.log(Response);
    }, error => {
      alert("an unexpected error");
      console.log(error)
    });
  }


}
