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
    })
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value }
    input.value = "";
    this.service.postposts(post).subscribe(response => {
      post.id = response.json().id;
      this.posts.unshift(post);
    })
  }

  updatePost(post) {
    this.service.updateposts(post).subscribe(Response => {
      console.log(Response);
    })
  }


}
