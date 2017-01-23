import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './post-seed';

@Injectable()

export class PostService {

  constructor() { }

  getPosts(): Post[] {
    return POSTS;
  }

  getPostById(targetId: number): Post {
    for (let i = 0; i < POSTS.length; i++) {
      if (POSTS[i].id === targetId) {
        return POSTS[i];
      }
    }
  }

}
