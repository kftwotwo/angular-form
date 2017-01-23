export class Post {
  public postDate: Date;

  constructor(public author: string,
    public title: string,
    public body: string,
    public articleUrl: string,
    public imageUrl: string,
    public category: string) {
      this.postDate = new Date();
    }
}
