import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  @Output() newPostSender = new EventEmitter();

  enteredNewPost(author: string, title: string, articleUrl: string, imageUrl: string, category: string, postDate: string) {
    var newPost: Post = new Post(author, title, articleUrl, imageUrl, category, postDate);
    this.newPostSender.emit(newPost);
  }

}
