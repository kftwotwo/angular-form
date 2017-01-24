import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostService]
})

export class PostListComponent implements OnInit {
  allPosts: Post[] = [];

  constructor(private router: Router, private postService: PostService) {}

  ngOnInit() {
    this.allPosts = this.postService.getPosts();
  }

  savePost(sentPost: Post): void {
    this.postService.addPost(sentPost);
  }

}
