import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../post.service";
import {Post} from "../models";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: PostService) { }

  ngOnInit(): void {
    this.getPost();
  }

  loaded: boolean | undefined;
  post: Post | undefined;

  getPost() {
    this.route.paramMap.subscribe((param) => {
      const routeParams = this.route.snapshot.paramMap;
      const id = Number(routeParams.get("id"));
      this.loaded = false;
      this.service.getPost(id).subscribe((post) => {
        this.post = post;
        this.loaded = true;
      })
    })
  }

  updatePost() {
    this.loaded = false;
    this.service.updatePost(this.post as Post).subscribe((post) => {
      console.log(post);
      this.loaded = true;
    });
  }

}
