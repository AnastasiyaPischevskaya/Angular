import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }


articles = [
  {
  id: 1,
  title: "article1",
  content: "some content",
  image: 'https://fakeimg.pl/250x100/ff0000/',
  date: '24.10.19'
  },
  {
    id: 2,
    title: "article2",
    content: "some content",
    image: 'https://fakeimg.pl/250x100/ff0000/',
    date: '24.10.19'
    },
    {
      id: 3,
      title: "article3",
      content: "some content",
      image: 'https://fakeimg.pl/250x100/ff0000/',
      date: '24.10.19'
      }
]

getArticles(){
 return this.articles;
}



}
