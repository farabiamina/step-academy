import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "./models";
import {HttpResponse} from "@angular/common/http";
import {HttpErrorResponse} from "@angular/common/http";
import {buildMonths} from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private client: HttpClient) {
  }

  base_url = "https://jsonplaceholder.typicode.com"

  getPosts(): Observable<Post[]> {
    return this.client.get<Post[]>(`${this.base_url}/posts`);
  }

  getPost(id: number): Observable<Post> {
    return this.client.get<Post>(`${this.base_url}/posts/${id}`);
  }

  addPost(post: Post): Observable<any> {
    return this.client.post<Post>(`${this.base_url}/posts/`, post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.client.put<Post>(`${this.base_url}/posts/${post.id}`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.client.delete(`${this.base_url}/posts/${id}`)
  }

  checkStatus(): any {
    this.client.get(
      `${this.base_url}/posts/`,
      {observe: 'response'}
    ).subscribe(response => {
      console.log(response.status)
    }, error => {
      // You can access status:
      console.log(error.status);
    });

    // return this.client.get<HttpResponse<any>>(`${this.base_url}/posts`).subscribe((response) =>{
    //   console.log(response.status)}, (e: HttpErrorResponse) => console.log(e.status))
    // return this.client.post<HttpResponse<any>>(`${this.base_url}/posts/`).subscribe(response => {
    //   console.log(response.status) // log status code
    // }, (e: HttpErrorResponse) => console.log(e.status))
  }


}
