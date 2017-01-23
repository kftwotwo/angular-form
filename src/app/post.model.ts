export class Post {
  private static postCounter = 4;

  constructor(
    public author: string,
    public title: string,
    public articleUrl: string,
    public imageUrl: string,
    public category: string,
    public postDate: string,
    public id: number = Post.postCounter) {
      Post.postCounter++;
    }
}
