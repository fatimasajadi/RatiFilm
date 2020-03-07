import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
  }

  getposts() {
    return this.http.get(this.url)
  }

  postposts(post) {
    return this.http.post(this.url, JSON.stringify(post))
  }

  updateposts(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
  }
}